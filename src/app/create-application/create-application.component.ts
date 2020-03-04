import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../application.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Application } from "src/model/application";

@Component({
  selector: "app-create-application",
  templateUrl: "./create-application.component.html",
  styleUrls: ["./create-application.component.css"]
})
export class CreateApplicationComponent implements OnInit {
  TITLE = "Create application";

  applicationForm: FormGroup = this.fb.group({
    companyName: ["", Validators.required],
    howFar: [""],
    website: [""],
    position: ["", Validators.required],
    location: [""],
    response: [""],
    salary: [""],
    status: [""]
  });

  constructor(
    private applicationService: ApplicationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  // TODO: Add Validations
  onSubmit(): any {
    if (this.applicationForm.valid) {
      const application: Application = this.applicationForm.value;
      this.applicationService.createApplication(application).subscribe();
      this.applicationForm.reset();
    }
  }
}
