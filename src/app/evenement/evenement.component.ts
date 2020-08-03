import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-evenement",
  templateUrl: "./evenement.component.html",
  styleUrls: ["./evenement.component.scss"],
})
export class EvenementComponent implements OnInit {
  isActive = false;

  toggleIconTheme() {
    this.isActive = !this.isActive;
  }

  storedTheme: string = localStorage.getItem("theme-color"); // key value from localstorage
  constructor() {}
  ngOnInit() {}
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
