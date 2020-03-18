import { Component, OnInit } from '@angular/core';

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
  isDisplay = false;  
  isShowButtonActive = false;

  constructor() { }

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
  toggleShowButton()
  {
    this.isShowButtonActive = !this.isShowButtonActive;

  }

}