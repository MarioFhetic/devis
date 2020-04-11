import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichelieu',
  templateUrl: './fichelieu.component.html',
  styleUrls: ['./fichelieu.component.scss']
})
export class FichelieuComponent implements OnInit {


  isShowButtonActive = false;
  isShowSpaceButtonActive = false;



  constructor() { }

  ngOnInit(): void {
  }

  toggleShowButton()
  {
    this.isShowButtonActive = !this.isShowButtonActive;

  }
  toggleSpaceShowButton()
  {
    this.isShowSpaceButtonActive = !this.isShowSpaceButtonActive;

  }

}
