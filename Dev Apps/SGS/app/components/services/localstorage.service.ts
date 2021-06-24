import { Injectable } from "@angular/core";
import { ILoginData as LoginData } from "../services/authentication.service";

@Injectable()
export class LocalstorageService {

    readonly logindataKey = "LoginData";
    public clearLoginData() {
        localStorage.removeItem(this.logindataKey);
    }
    public setLoginData(logindata: LoginData) {        
        localStorage.setItem(this.logindataKey, JSON.stringify(logindata));
    }
    public getLoginData(): LoginData | null {
        const data = localStorage.getItem(this.logindataKey);
        if (data == null || data === "") {           
            return null;
        }

        return JSON.parse(data);
    }
}