import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-history",
  templateUrl: "./search-history.component.html",
  styleUrls: ["./search-history.component.css"]
})
export class SearchHistoryComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  userDetails;
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }

  profile() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/userprofile"]);
    }
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }
}
