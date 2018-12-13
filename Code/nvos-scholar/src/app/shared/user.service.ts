import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  selectedUser: User = {
    fullName: "",
    email: "",
    password: "",
    articles: [],
    search: [],
    click: []
  };

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

  //HttpMethods

  //Creates user
  postUser(user: User) {
    return this.http.post(
      environment.apiBaseUrl + "/register",
      user,
      this.noAuthHeader
    );
  }

  //Use login
  login(authCredentials) {
    return this.http.post(
      environment.apiBaseUrl + "/authenticate",
      authCredentials,
      this.noAuthHeader
    );
  }

  //Returns user profile from MongoDB
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + "/userProfile");
  }

  //Saves article to databae
  addArticle(articleInfo: object) {
    return this.http.post(environment.apiBaseUrl + "/savearticle", articleInfo);
  }

  addClick(articleInfo: object) {
    return this.http.post(environment.apiBaseUrl + "/saveclick", articleInfo);
  }

  //Saves search history to databse
  saveSearch(search: object) {
    return this.http.post(environment.apiBaseUrl + "/savesearch", search);
  }

  question(answer: object) {
    return this.http.post(environment.apiBaseUrl + "/question", answer);
  }

  //Helper Methods

  //Sets login token
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  //Creates login token
  getToken() {
    return localStorage.getItem("token");
  }

  //Deletes login token
  deleteToken() {
    localStorage.removeItem("token");
  }

  //Used to get a user's token
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split(".")[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  //Checks if user is logged in
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else return false;
  }
}
