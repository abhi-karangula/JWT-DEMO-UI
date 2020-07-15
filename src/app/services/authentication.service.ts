import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  authenticate(authenticationRequest) {
    return this.httpClient
      .post<any>("/api/authenticate", authenticationRequest)
      .pipe(
        map((userData) => {
          sessionStorage.setItem("username", authenticationRequest.username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
