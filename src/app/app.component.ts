import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // storedTheme: string = localStorage.getItem('theme-color');
  // constructor() {}
  ngOnInit() {}
  // setTheme()
  // storedTheme: string = localStorage.getItem("theme-color"); // key value from localstorage
  // setTheme() {
  //   if (this.storedTheme === "theme-dark") {
  //     localStorage.setItem("theme-color", "theme-light");
  //     this.storedTheme = localStorage.getItem("theme-color");
  //   } else {
  //     localStorage.setItem("theme-color", "theme-dark");
  //     this.storedTheme = localStorage.getItem("theme-color");
  //   }
  //   // return this.setTheme();
  // }

  // private isDark = false;
  // @HostBinding("class")
  // get themeMode() {
  //   return this.isDark ? "theme-dark" : "theme-light";
  // }

  // constructor(
  //   @Inject(DOCUMENT) private document: Document,
  //   private renderer: Renderer2
  // ) {}

  // switchMode(isDarkMode: boolean) {
  //   const hostClass = isDarkMode
  //     ? "mat-typography theme-dark"
  //     : "mat-typography theme-light";
  //   this.renderer.setAttribute(this.document.body, "class", hostClass);
  // }
}
