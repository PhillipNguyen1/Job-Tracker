import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../application.service";
import { Observable } from "rxjs";
import { Application } from "src/model/application";

@Component({
  selector: "app-view-applications",
  templateUrl: "./view-applications.component.html",
  styleUrls: ["./view-applications.component.css"]
})
export class ViewApplicationsComponent implements OnInit {
  TITLE = "View Applications";
  applications$: Observable<Application[]>;
  loading: boolean;

  displayedColumns: string[] = [
    "Company",
    "Position",
    "Application Date",
    "Location",
    "Status",
    "Salary"
  ];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applications$ = this.applicationService.getAllApplications();
  }
}
