import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-authenticate",
  templateUrl: "./authenticate.component.html",
  styleUrls: ["./authenticate.component.scss"],
})
export class AuthenticateComponent implements OnInit {
  public userDetailsForm: FormGroup;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  authenticate() {
    let userDetails = {
      username: this.userDetailsForm.get("username").value,
      password: this.userDetailsForm.get("password").value,
    };
    this.authenticationService.authenticate(userDetails).subscribe(
      (data) => {
        alert("authentication success, navigate to home page");
        this.router.navigate(["/userList"]);
      },
      (error) => {
        alert("authentication failed, login again");
      }
    );
  }
}
