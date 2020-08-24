// import {
//   Component,
//   OnInit,
//   ChangeDetectionStrategy,
//   ViewChild,
//   ElementRef,
// } from "@angular/core";
// import { Observable, merge } from "rxjs";
// import { FocusMonitor } from "@angular/cdk/a11y";
// import { MatInput } from "@angular/material/input";
// import { map, filter, mapTo } from "rxjs/operators";
// import {
//   CdkConnectedOverlay,
//   ScrollStrategyOptions,
//   ScrollStrategy,
// } from "@angular/cdk/overlay";

// @Component({
//   selector: "app-drop-down-seach",
//   templateUrl: "./drop-down-seach.component.html",
//   styleUrls: ["./drop-down-seach.component.scss"],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class DropDownSeachComponent implements OnInit {
//   isActive = false;
//   showPanel$: Observable<boolean>;

//   @ViewChild(MatInput, { read: ElementRef, static: true })
//   private inputEl: ElementRef;

//   @ViewChild(CdkConnectedOverlay, { static: true })
//   private connectedOverlay: CdkConnectedOverlay;

//   private isPanelVisible$: Observable<boolean>;
//   private isPannelHidden$: Observable<boolean>;

//   scrollStrategy: ScrollStrategy;
//   constructor(
//     private focusMonitor: FocusMonitor,
//     private scrollStrategies: ScrollStrategyOptions
//   ) {}

//   isOpen = false;
//   isSearchBarActive = true;

//   toggleSearchBar() {
//     this.isSearchBarActive != this.isSearchBarActive;
//   }

//   toggleIconTheme() {
//     this.isActive = !this.isActive;
//   }

//   storedTheme: string = localStorage.getItem("theme-color"); // key value from localstorage
//   setTheme() {
//     if (this.storedTheme === "theme-dark") {
//       localStorage.setItem("theme-color", "theme-light");
//       this.storedTheme = localStorage.getItem("theme-color");
//     } else {
//       localStorage.setItem("theme-color", "theme-dark");
//       this.storedTheme = localStorage.getItem("theme-color");
//     }
//     // return this.setTheme();
//   }

//   ngOnInit(): void {
//     if (this.isSearchBarActive != false) {
//       this.scrollStrategy = this.scrollStrategies.block();
//       this.isPannelHidden$ = this.connectedOverlay.backdropClick.pipe(
//         mapTo(false)
//       );

//       this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
//         filter((focused) => !!focused),
//         mapTo(true)
//       );

//       this.showPanel$ = merge(this.isPannelHidden$, this.isPanelVisible$);
//     }
//   }
// }
