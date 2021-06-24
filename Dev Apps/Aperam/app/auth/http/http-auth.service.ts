import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdalService } from 'adal-angular4';


@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

token ="";
token2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI3Yzc5Y2NmYS1kMDUxLTRjMjktYWE1Zi1jNzlkMmYxZTlmN2YiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yNjg0NWQ0Zi0wY2Y0LTRkMDgtYjcxNy0wNmI2Yjc4MjRlYzQvIiwiaWF0IjoxNTQyNjIyMzY0LCJuYmYiOjE1NDI2MjIzNjQsImV4cCI6MTU0MjYyNjI2NCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlZhbnN0cmFlbGVuIiwiZ2l2ZW5fbmFtZSI6IkZyZWRlcmlrIiwiaXBhZGRyIjoiMTg1LjQ2LjIxMi4xNjUiLCJuYW1lIjoiRnJlZGVyaWsgVmFuc3RyYWVsZW4iLCJub25jZSI6IjA5ODVmMjYxLWQxNTMtNDEyMi04Yjg2LTc1ZThhNzY2YjU1YyIsIm9pZCI6Ijg0ZjNiMzA1LTdiNzAtNDA4NS1hYThjLTA3ZmEzNTNiMGRhNCIsInJvbGVzIjpbIlNJUERpUENvcnJlY3RvciJdLCJzdWIiOiJ6UTUwQVVRTDJvWUxnMWFXcE1UcjdOOUtLOHBqWmVhOXRLbUZtVndvbFlvIiwidGlkIjoiMjY4NDVkNGYtMGNmNC00ZDA4LWI3MTctMDZiNmI3ODI0ZWM0IiwidW5pcXVlX25hbWUiOiJGcmVkZXJpay52YW5zdHJhZWxlbi1wYXJ0bmVyQGFwZXJhbS5jb20iLCJ1cG4iOiJGcmVkZXJpay52YW5zdHJhZWxlbi1wYXJ0bmVyQGFwZXJhbS5jb20iLCJ1dGkiOiJPVHU5MVJCVUtFcWZoSjdVQi1GSUFBIiwidmVyIjoiMS4wIn0.UkKc9VgRJaO0Qr_YpWZyi4gSZcFz8uNezLrfRljdU_YrLsSoEvlrVYRjPvCi1Eor5LeOr3mxrpWnduVONppgi0-cM_g8UUyZd5sSILUUKoYNnRKuowln3PdQIDTQ11xk65UeqS0YEM0pJmSkqWbAeRAYDb43qaEIuLqhVwc3Ad09Ylc1CPngMDvkkrUDXHUo_f_4NGYvNEhwS2AUuSC4_CHyI3EQJqVesWiPCrMDFf5JrO3dyDRlqNDeCKJOgsfooiJ1oJSelCMynvc7IL8e-Rd2-1p8h2kFw8K-OH9Vc_V63kYL7cxIxBXJP9Fy7PyFlrb5iAhGKdH0vZc7gE5sXQ&state=e4c209f3-773c-4073-83c1-24b715b43de5"

  constructor(private http: HttpClient, private adalService: AdalService) {
    // this.token = this.adalService.getCachedToken("SIPDiP-API");
    // this.adalService.acquireToken("SIPDiP-API").subscribe(response => this.token = response);
    this.token = localStorage.getItem('token');
    this.getToken();
  }

  getToken(){
    this.token = localStorage.getItem('token');
    return this.token;
  }
  //constructor(private adal5HttpService: Adal5HTTPService,
  //  private adal5Service: Adal5Service) { }

  public get(url: string): Observable<any> {
      const options = this.prepareOptionsGet();
      // return this.adal5HttpService.get(url, options);
      return this.http.get(url, options);
  }

  public post(url: string, body?: any): Observable<any> {
    const options = this.prepareOptionsPost();
    console.log('TOKEN: ' ,this.token);
    // if (!body){
    //   body = {};
    // }
    // return this.adal5HttpService.post(url, body, options);
    return this.http.post(url, body, options);
  }

  public put(url: string, body?: any): Observable<any> {
    const options = this.prepareOptionsPost();
    console.log('TOKEN: ' ,this.token);
    // if (!body){
    //   body = {};
    // }
    // return this.adal5HttpService.post(url, body, options);
    return this.http.put(url, body, options);
  }

  public delete(url: string, body?: any): Observable<any> {
    const options = this.prepareOptionsDelete();
    options.body = body;
    return this.http.delete(url, options);
  }
  
  public prepareOptionsGet():any{
  let headers = new HttpHeaders();
      headers = headers
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${this.token}`);
      return {headers: headers};
  }

  private prepareOptionsPost():any{
    let headers = new HttpHeaders();
        headers = headers
            .set('Content-Type', 'application/json')
            .set('Accept', 'applcation/json')
            .set('Authorization', `Bearer ${this.token}`);
        return{headers: headers};
    }

  private prepareOptionsDelete():any{
    let headers = new HttpHeaders();
        headers = headers
            .set('Content-Type', 'application/json')
            .set('Accept', 'applcation/json')
            .set('Authorization', `Bearer ${this.token}`);
        return{headers: headers};
    }


}
