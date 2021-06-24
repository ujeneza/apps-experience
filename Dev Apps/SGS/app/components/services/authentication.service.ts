import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LocalstorageService } from "../services/localstorage.service";

@Injectable()
export class AuthenticationService implements CanActivate {

    private loginDataChecked$ = new Subject<ILoginData | null>();
    private userIsLoggedIn$ = new Subject<ILoginData | null>();

    getLoginDataChecked(): Observable<ILoginData | null> {
        return this.loginDataChecked$.asObservable();
    }

    getUserIsLoggedIn(): Observable<ILoginData | null> {
        return this.userIsLoggedIn$.asObservable();
    }

    public userId = 0;
    public jwtToken = "";
    public userType = UserTypes.NotLoggedIn;
    public userRole = UserRoles.Klant;

    constructor(private readonly router: Router, private readonly localstorageService: LocalstorageService, private readonly http: HttpClient, @Inject("BASE_URL") private readonly baseUrl: string) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.RestoreToken(state.url, true);
    }

    public RestoreToken(url: string, activateToken: boolean): boolean | Observable<boolean> | Promise<boolean> {
        if (this.jwtToken === "") {
            // is possible when opening a link in a new tab
            var logindata = this.localstorageService.getLoginData();
            if (logindata != null) {
                this.http.get(this.baseUrl + "api/Authentication/IsTokenValid", { params: logindata as any }).toPromise()
                    .then(result => {
                        if (result === true) {
                            const data = logindata as ILoginData;
                            this.setAsLoggedIn(data);
                            if (activateToken) {
                                this.loginDataChecked$.next(data);
                                this.router.navigateByUrl(url);
                            }
                        } else {
                            this.setAsloggedOut();
                            if (activateToken) {
                                this.loginDataChecked$.next(null);
                            }
                        }
                    }).catch(error => {
                        this.setAsloggedOut();
                        console.error(error);
                        this.loginDataChecked$.next(null);
                    });
            }
        } else {
            if (this.jwtToken !== "")
                return true;

            // TODO maybe make a difference between klant and grondwijzer side

            this.router.navigateByUrl("/home");
            return false;
        }
    }

    public checkLoginData(logindata: ILoginData | null) {
        if (logindata == null) {
            this.setAsloggedOut();
            this.loginDataChecked$.next(null);
            return;
        }

        this.http.get(this.baseUrl + "api/Authentication/IsTokenValid", { params: logindata as any }).toPromise()
            .then(result => {
                if (result === true) {
                    const data = logindata as ILoginData;
                    this.setAsLoggedIn(data);
                    this.loginDataChecked$.next(data);
                } else {
                    this.setAsloggedOut();
                    this.loginDataChecked$.next(null);
                }
            }).catch(error => {
                this.setAsloggedOut();
                console.error(error);
                this.loginDataChecked$.next(null);
            });
    }

    public login(username: string, password: string) {
        let params = new HttpParams();
        params = params.append("username", username);
        params = params.append("password", password);

        this.http.get(this.baseUrl + "api/Authentication/login", { params: params }).toPromise()
            .then(result => {
                if (result === null) {
                    this.setAsloggedOut();
                    this.userIsLoggedIn$.next(null);
                } else {
                    const data = result as ILoginData;
                    if (data.message == null || data.message === '') {
                        this.setAsLoggedIn(data);
                        this.userIsLoggedIn$.next(data);
                    } else {
                        console.info(data.message);
                    }
                }
            }).catch(error => {
                this.setAsloggedOut();
                console.error(error);
                this.userIsLoggedIn$.next(null);
            });
    };

    public logout() {
        this.setAsloggedOut();
        this.localstorageService.clearLoginData();
        this.loginDataChecked$.next(null);
    }

    private setAsloggedOut(): void {
        this.userId = 0;
        this.jwtToken = "";
        this.userType = UserTypes.NotLoggedIn;
        this.userRole = UserRoles.Unassigned;
    }

    private setAsLoggedIn(data: ILoginData): void {
        this.userId = data.userId;
        this.jwtToken = data.token;
        this.userType = data.userType;
        this.userRole = data.userRole;
    }

    public getRole(): Observable<UserRoles> {
        return this.http.get(this.baseUrl + "api/Authentication/GetRole").map(x => x as UserRoles);
    };
}

export interface ILoginData {
    userId: number;
    userName: string;
    token: string;
    userType: UserTypes;
    userRole: UserRoles;
    message: string | null;
}

export enum UserTypes {
    User,
    Top,
    Dop,
    NotLoggedIn
}

export enum UserRoles {
    Unassigned,
    Klant,
    Grondwijzer,
    Ovam,
    Bouwunie,
    Nav,
    SGSBelgium
}