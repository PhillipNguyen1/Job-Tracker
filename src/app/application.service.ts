import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// TODO: export?
export interface Application {
  companyName: string;
  position: string;
  applicationDate: Date;
}

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  applicationsURL =
    "https://clfqyhkclb.execute-api.us-east-1.amazonaws.com/dev/application";

  constructor(private http: HttpClient) {}

  getAllApplications() {
    return this.http.get<Application[]>(this.applicationsURL);
  }

  getApplication(id: string) {
    return this.http.get<Application>(this.applicationsURL + "/" + id);
  }

  deleteApplication(id: string) {
    return this.http.delete(this.applicationsURL + "/" + id);
  }
}
