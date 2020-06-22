import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-info-complementaire2",
  templateUrl: "./info-complementaire2.component.html",
  styleUrls: ["./info-complementaire2.component.scss"],
})
export class InfoComplementaire2Component implements OnInit {
  constructor() {}

  isDisplay = false;
  isDisplayHosting = false;
  isAddMealFirst = false;
  isMealRepet = false;

  ngOnInit(): void {}

  quantity: number = 0;
  i = 0;
  participants = " participants";
  plus() {
    if (this.i != 100) {
      this.i++;
      this.quantity = this.i;
    }
  }
  minus() {
    if (this.i != 0) {
      this.i--;
      this.quantity = this.i;
    }
  }

  displayModalMeal() {
    this.isDisplay = true;
  }
  closeModalMeal() {
    this.isDisplay = false;
    this.isAddMealFirst = false;
  }

  displayModalHosting() {
    this.isDisplayHosting = true;
  }
  closeModalHosting() {
    this.isDisplayHosting = false;
  }

  addMeal() {
    this.isAddMealFirst = true;
  }
  closeAddMeal() {
    this.isAddMealFirst = false;
  }

  displayModalMealRepetition() {
    this.isMealRepet = true;
  }

  closeModalMealRepetition() {
    this.isMealRepet = false;
  }
}
