import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../application.service";

const ELEMENT_DATA: any[] = [
  {
    companyName: "Slalom Build",
    position: "Software Engineer",
    applicationDate: "2020-02-19",
    location: "Houston, TX",
    status: "Accepted",
    salary: 80000
  },
  {
    companyName: "Google",
    position: "Software Engineer",
    applicationDate: "2020-02-15",
    location: "Houston, TX",
    status: "Rejected",
    salary: 100000
  }
];

@Component({
  selector: "app-view-applications",
  templateUrl: "./view-applications.component.html",
  styleUrls: ["./view-applications.component.css"]
})
export class ViewApplicationsComponent implements OnInit {
  TITLE = "View Applications";
  displayedColumns: string[] = [
    "Company",
    "Position",
    "Application Date",
    "Location",
    "Status",
    "Salary"
  ];
  dataSource = ELEMENT_DATA;

  applications;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.getAllApplications().subscribe(data => {
      this.applications = data;
    });
  }
}
