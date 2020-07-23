import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-webzine-actu",
  templateUrl: "./webzine-actu.component.html",
  styleUrls: ["./webzine-actu.component.scss"],
})
export class WebzineActuComponent implements OnInit {
  isActive = false;
  isLoadMoreClicked = false;

  toggleIconTheme() {
    this.isActive = !this.isActive;
  }

  loadMore() {
    this.isLoadMoreClicked = true;
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
