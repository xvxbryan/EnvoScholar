import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  model = {
    email: "",
    password: ""
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  serverErrorMessages: string;

  /**
   * This function gets called when the page loads.
   * Will redirect the user to their profile page if they are already logged in
   */
  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/userprofile");
    }
  }

  /**
   * Accepts user information from the HTML page to login
   */
  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res["token"]);
        this.router.navigateByUrl("/userprofile");
      },
      err => {
        this.serverErrorMessages = err.message;
      }
    );
  }
}
