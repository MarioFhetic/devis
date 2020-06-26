import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogExempleComponent } from "../dialog-exemple/dialog-exemple.component";
import { DialogparticipantsComponent } from "../dialogparticipants/dialogparticipants.component";
import { DialogbudgetComponent } from "../dialogbudget/dialogbudget.component";
import { DialogdateComponent } from "../dialogdate/dialogdate.component";

@Component({
  selector: "app-brief",
  templateUrl: "./brief.component.html",
  styleUrls: ["./brief.component.scss"],
})
export class BriefComponent implements OnInit {
  isDisplayRangeOfPrices = false;
  isDisplayBudgetPeople = false;
  isDisplayBudgetPeopleByPrices = false;
  isDisplayBudget = false;
  isDisplayDate = false;
  isDisplayEvent = false;
  isDisplay = false;
  isShowButtonActive = false;

  constructor(public dialog: MatDialog) {}

  openDialogElement() {
    this.dialog.open(DialogExempleComponent);
  }
  openDialogParticipants() {
    this.dialog.open(DialogparticipantsComponent);
  }
  openDialogBudget() {
    this.dialog.open(DialogbudgetComponent);
  }
  openDialogDate() {
    this.dialog.open(DialogdateComponent);
  }

  ngOnInit(): void {}

  toggleDisplayBudgetPeople() {
    this.isDisplayBudget = !this.isDisplayBudget;
    this.isDisplayBudgetPeople = !this.isDisplayBudgetPeople;
    // if (
    //   this.isDisplayRangeOfPrices === true &&
    //   this.isDisplayBudgetPeople === true
    // ) {
    //   this.isDisplayBudget = !this.isDisplayBudget;
    // }
    // this.isDisplayRangeOfPrices = !this.isDisplayRangeOfPrices;

    // if (
    //   this.isDisplayBudgetPeople === true &&
    //   this.isDisplayRangeOfPrices === false
    // ) {
    //   this.isDisplayBudgetPeople = !this.isDisplayBudgetPeople;
    //   this.isDisplayBudget = false;
    //   this.isDisplayRangeOfPrices = false;
    //

    if (
      this.isDisplayBudgetPeople === true &&
      this.isDisplayRangeOfPrices === true
    ) {
      this.isDisplayBudgetPeople = false;
      this.isDisplayRangeOfPrices = false;
      this.isDisplayBudget = false;
      this.isDisplayBudgetPeopleByPrices = true;
    }
  }

  // fourchette de prix
  toggleDisplayRangeOfPrices() {
    // this.isDisplayRangeOfPrices = !this.isDisplayRangeOfPrices;
    // this.isDisplayBudget = !this.isDisplayBudget;
    // if (
    //   this.isDisplayRangeOfPrices === true &&
    //   this.isDisplayBudgetPeople === true
    // ) {
    //   this.isDisplayBudget = !this.isDisplayBudget;
    // }
    // this.isDisplayRangeOfPrices = !this.isDisplayRangeOfPrices;

    // Premier cas ou la checkbox "Par Personne" n'est pas checked
    if (this.isDisplayBudgetPeople === false) {
      this.isDisplayBudget = !this.isDisplayBudget;
      this.isDisplayRangeOfPrices = !this.isDisplayRangeOfPrices;
    }
    if (
      this.isDisplayBudgetPeople === true &&
      this.isDisplayRangeOfPrices === true
    ) {
      this.isDisplayBudgetPeople = false;
      this.isDisplayRangeOfPrices = false;
      this.isDisplayBudget = false;
      this.isDisplayBudgetPeopleByPrices = true;
    }
  }

  // budget global
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  toggleDisplayDate() {
    this.isDisplayDate = !this.isDisplayDate;
  }
  toggleDisplayEvent() {
    this.isDisplayEvent = !this.isDisplayEvent;
  }
  toggleShowButton() {
    this.isShowButtonActive = !this.isShowButtonActive;
  }
}
