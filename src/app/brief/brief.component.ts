import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExempleComponent } from '../dialog-exemple/dialog-exemple.component';
import { DialogparticipantsComponent } from '../dialogparticipants/dialogparticipants.component';
import { DialogbudgetComponent } from '../dialogbudget/dialogbudget.component';



@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss']
})
export class BriefComponent implements OnInit {


  isDisplayRangeOfPrices = false;
  isDisplayBudgetPeople = false;
  isDisplayBudget = false;
  isDisplayDate = false;
  isDisplayEvent = false;
  isDisplay = false;  
  isShowButtonActive = false;

  
  constructor(public dialog: MatDialog){}

  openDialogElement()
  {
    this.dialog.open(DialogExempleComponent);
  }
  openDialogParticipants()
  {
    this.dialog.open(DialogparticipantsComponent);
  }
  openDialogBudget()
  {
    this.dialog.open(DialogbudgetComponent);
  }

  ngOnInit(): void {
  }
  
  toggleDisplayBudget()
  {
    this.isDisplayBudget = !this.isDisplayBudget;
    this.isDisplayBudgetPeople = !this.isDisplayBudgetPeople;
  }

  toggleDisplayRangeOfPrices()
  {
    this.isDisplayRangeOfPrices = !this.isDisplayRangeOfPrices;
    this.isDisplayBudget = !this.isDisplayBudget;
  }

  toggleDisplay()
  {
    this.isDisplay = !this.isDisplay;
  }
  toggleDisplayDate()
  {
    this.isDisplayDate = !this.isDisplayDate;
  }
  toggleDisplayEvent()
  {
    this.isDisplayEvent = !this.isDisplayEvent;
  }
  toggleShowButton()
  {
    this.isShowButtonActive = !this.isShowButtonActive;

  }



}