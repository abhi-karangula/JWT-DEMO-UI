import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) {}

  getUsers() {
  //   var reqHeader = new HttpHeaders({ 
  //     'Content-Type': 'application/json',
  //     'Authorization': sessionStorage.getItem('token')
  //  });
    return this.http.get("/api/userList/getAllUsers").pipe(
      map((data: any) => {
        return data;
      }),
      catchError(error => {
        throw error;
      })
    );
  }
}
