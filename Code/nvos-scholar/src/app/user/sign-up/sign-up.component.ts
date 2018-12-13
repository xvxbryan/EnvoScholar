import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../shared/user.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  /**
   * This function gets called when a user submits their sign up information.
   * It will take the information taken from the form (information from the input boxes in the HTML)
   * and send it to the backend server to be sent to the MongoDB
   */
  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => (this.showSucessMessage = false), 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("<br/>");
        } else
          this.serverErrorMessages =
            "Something went wrong.Please contact admin.";
      }
    );
  }

  //Clears the sign up form when a user submits their information
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: "",
      email: "",
      password: "",
      articles: [],
      search: [],
      click: []
    };
    form.resetForm();
    this.serverErrorMessages = "";
  }
}
