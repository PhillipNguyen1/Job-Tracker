import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  opened = false;

  constructor() {}

  ngOnInit() {}

  openNav(): void {
    this.opened = !this.opened;
  }
}
