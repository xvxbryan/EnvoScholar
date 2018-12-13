import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Feedback } from "./feedBack.model";

@Injectable({
  providedIn: "root"
})
export class FeedbackService {
  selectedFeeback: Feedback = {
    question: []
  };

  constructor(private http: HttpClient) {}

  //HttpMethods
  question(answer: object) {
    return this.http.post(environment.apiBaseUrl + "/question", answer);
  }
}
