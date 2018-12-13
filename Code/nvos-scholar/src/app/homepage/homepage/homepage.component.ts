import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../../shared/user.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit() {}

  /**
   *
   * This function gets called when a user submits a search
   * It will redirect to the displayresults page with the search query entered
   */
  openSearchPage(form: NgForm) {
    window.location.href =
      "http://localhost:4200/displayresults?search=" + form.value.search;
  }
}
