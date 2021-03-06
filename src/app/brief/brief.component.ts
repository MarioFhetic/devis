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
  isDisplayBudget = true;
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

  // mon budget par personne
  toggleDisplayBudgetPeople() {
    this.isDisplayBudgetPeople = !this.isDisplayBudgetPeople;
    this.isDisplayBudget = !this.isDisplayBudget;
  }

  // fourchette de prix
  toggleDisplayRangeOfPrices() {
    if (this.isDisplayBudgetPeople === false) {
      this.isDisplayBudget = !this.isDisplayBudget;
      this.isDisplayRangeOfPrices = !this.isDisplayRangeOfPrices;
    }

    if (this.isDisplayBudgetPeople === true) {
      this.isDisplayBudget = !this.isDisplayBudget;
      this.isDisplayRangeOfPrices = false;
    }
  }

  // fourchette de participants
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
