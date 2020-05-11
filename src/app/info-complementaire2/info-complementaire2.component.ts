import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-complementaire2',
  templateUrl: './info-complementaire2.component.html',
  styleUrls: ['./info-complementaire2.component.scss']
})
export class InfoComplementaire2Component implements OnInit {

  constructor() { }

  isDisplay = false;
  isDisplayHosting = false;  
  isAddMealFirst = false;
  
  


  ngOnInit(): void {
  }

  displayModalMeal()
  {
      this.isDisplay = true;  
  }
  closeModalMeal()
  {
      this.isDisplay = false;
      this.isAddMealFirst = false;
  }

  displayModalHosting()
  {
      this.isDisplayHosting = true;  
  }
  closeModalHosting()
  {
      this.isDisplayHosting = false;
  }

  addMeal()
  {
    this.isAddMealFirst = true;
  }
  closeAddMeal()
  {
    this.isAddMealFirst = false;
  }

}
