import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Application } from "src/model/application";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  baseUrl =
    "https://clfqyhkclb.execute-api.us-east-1.amazonaws.com/dev/application";

  constructor(private http: HttpClient) {}

  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.baseUrl);
  }

  getApplication(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.baseUrl}/${id}`);
  }

  // TODO: What type is returned?
  deleteApplication(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createApplication(application: Application): Observable<any> {
    return this.http.post<Application>(this.baseUrl, application);
  }
}
