import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-autoref",
  templateUrl: "./autoref.component.html",
  styleUrls: ["./autoref.component.scss"],
})
export class AutorefComponent implements OnInit {
  isFirstFormActive = true;
  isSecondFormActive = false;

  constructor() {}

  openSecondForm() {
    this.isFirstFormActive = !this.isFirstFormActive;
    this.isSecondFormActive = !this.isSecondFormActive;
  }

  closeSecondForm() {
    this.isSecondFormActive = !this.isSecondFormActive;
    this.isFirstFormActive = !this.isFirstFormActive;
  }

  ngOnInit(): void {}
}
