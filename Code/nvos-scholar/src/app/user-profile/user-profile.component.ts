import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) {}

  /**
   * This function is called when the page loads.
   * It will return the user information from the database
   */
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }

  //This function allows the user to logout from their profile page
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }

  //This function redirects the user to the savedarticles page
  savedArticles(userDetails) {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/savedarticles"]);
    }
  }
  //This function redirects the user to the searchhistory page
  searchHistory() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/searchhistory"]);
    }
  }

  //This function redirects the user to the clickhistory page
  clickHistory() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/clickhistory"]);
    }
  }
}
