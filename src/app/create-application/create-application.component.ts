import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../application.service";

@Component({
  selector: "app-create-application",
  templateUrl: "./create-application.component.html",
  styleUrls: ["./create-application.component.css"]
})
export class CreateApplicationComponent implements OnInit {
  TITLE = "Create application";

  companyName: string;
  howFar: string;
  website: string;
  position: string;
  location: string;
  response: boolean;
  salary: number;
  status: string;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {}

  onSubmit(): any {
    console.log("form submitted");
  }
}
