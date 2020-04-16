import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichelieu',
  templateUrl: './fichelieu.component.html',
  styleUrls: ['./fichelieu.component.scss']
})
export class FichelieuComponent implements OnInit {


  isShowButtonActive = false;
  isShowButtonFoodActive = false;

  isShowSpaceButtonActive = false;
  isShowStuffButtonActive = false;
  isShowActivityButtonActive = false;





  constructor() { }

  ngOnInit(): void {
  }

  toggleShowButton()
  {
    this.isShowButtonActive = !this.isShowButtonActive;
  }

  toggleShowFoodButton()
  {
    this.isShowButtonFoodActive = !this.isShowButtonFoodActive;
  }

  toggleSpaceShowButton()
  {
    this.isShowSpaceButtonActive = !this.isShowSpaceButtonActive;
  }

  toggleStuffShowButton()
  {
    this.isShowStuffButtonActive = !this.isShowStuffButtonActive;
  }
  toggleActivityShowButton()
  {
    this.isShowActivityButtonActive = !this.isShowActivityButtonActive;
  }


}
