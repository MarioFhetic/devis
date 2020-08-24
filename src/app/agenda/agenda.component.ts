import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Options } from "ng5-slider";
import { Observable, merge } from "rxjs";
import { FocusMonitor } from "@angular/cdk/a11y";
import { MatInput } from "@angular/material/input";
import { filter, mapTo } from "rxjs/operators";
import {
  CdkConnectedOverlay,
  ScrollStrategyOptions,
  ScrollStrategy,
} from "@angular/cdk/overlay";

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
  showNav = false;
  test = false;
  showPanel$: Observable<boolean>;

  @ViewChild(MatInput, { read: ElementRef, static: true })
  private inputEl: ElementRef;

  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay: CdkConnectedOverlay;

  private isPanelVisible$: Observable<boolean>;
  private isPannelHidden$: Observable<boolean>;

  scrollStrategy: ScrollStrategy;
  constructor(
    private focusMonitor: FocusMonitor,
    private scrollStrategies: ScrollStrategyOptions
  ) {}

  toggleIconTheme() {
    this.isActive = !this.isActive;
  }
  toggleSearch() {
    this.test = !this.test;
  }

  storedTheme: string = localStorage.getItem("theme-color"); // key value from localstorage
  ngOnInit(): void {
    if (this.test === true) {
      this.scrollStrategy = this.scrollStrategies.block();
      this.isPannelHidden$ = this.connectedOverlay.backdropClick.pipe(
        mapTo(false)
      );

      this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
        filter((focused) => !!focused),
        mapTo(true)
      );

      this.showPanel$ = merge(this.isPannelHidden$, this.isPanelVisible$);
    }
  }
  minValue: number = 4;
  maxValue: number = 8;
  options: Options = {
    floor: 0,
    ceil: 15,
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
