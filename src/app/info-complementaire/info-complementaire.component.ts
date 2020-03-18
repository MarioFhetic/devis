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
