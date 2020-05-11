import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-complementaire',
  templateUrl: './info-complementaire.component.html',
  styleUrls: ['./info-complementaire.component.scss']
})
export class InfoComplementaireComponent implements OnInit {

  constructor() { }

  isDisplay = false;  
  isDisplayHosting = false;

  


  ngOnInit(): void {
  }

  quantity: number = 0;
  i = 0
  plus()
  {
    if(this.i!=100)
    {
      this.i++;
      this.quantity = this.i;
    }
  }
  minus()
  {
    if(this.i!=0)
    {
      this.i--;
      this.quantity = this.i;
    }
  }

  displayModalMeal()
  {
      this.isDisplay = true;  
  }
  closeModalMeal()
  {
      this.isDisplay = false;
  }
  displayModalHosting()
  {
      this.isDisplayHosting = true;  
  }
  closeDisplayModalHosting()
  {
      this.isDisplayHosting = false;  
  }
  
}
