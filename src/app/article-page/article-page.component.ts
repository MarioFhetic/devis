import { Component, EventEmitter, Output, OnInit } from "@angular/core";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

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
