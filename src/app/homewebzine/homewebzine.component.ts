import { Component, EventEmitter, Output, OnInit } from "@angular/core";
// import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: "app-homewebzine",
  templateUrl: "./homewebzine.component.html",
  styleUrls: ["./homewebzine.component.scss"],
})
export class HomewebzineComponent implements OnInit {
  // @Output()
  // readonly darkModeSwitched = new EventEmitter<boolean>();

  // constructor() {}

  // onDarkModeSwitched({ checked }: MatSlideToggleChange) {
  //   this.darkModeSwitched.emit(checked);
  // }
  isOpen = false;
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
