import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";

@Component({
  selector: "app-agenda",
  templateUrl: "./agenda.component.html",
  styleUrls: ["./agenda.component.scss"],
})
export class AgendaComponent implements OnInit {
  isActive = false;
  hamburgerOpened = false;
  filterOpened = false;
  panelOpenState = false;

  toggleIconTheme() {
    this.isActive = !this.isActive;
  }

  storedTheme: string = localStorage.getItem("theme-color"); // key value from localstorage
  constructor() {}
  ngOnInit() {}

  minValue: number = 3;
  maxValue: number = 15;
  options: Options = {
    floor: 0,
    ceil: 30,
  };
  setTheme() {
    if (this.storedTheme === "theme-dark") {
      localStorage.setItem("theme-color", "theme-light");
      this.storedTheme = localStorage.getItem("theme-color");
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      this.storedTheme = localStorage.getItem("theme-color");
    }
    // return this.setTheme();
  }
}
