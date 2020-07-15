import { Component, OnInit } from "@angular/core";
import { UserListService } from "../services/user-list.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  userList: any[];
  constructor(private userListService: UserListService, private router: Router) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.userListService.getUsers().subscribe(
      (response) => {
        this.userList = response;
      },
      (error) => {
        this.router.navigate(['/authenticate']);
      }
    );
  }
}
