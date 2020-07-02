import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { FormulebasicComponent } from "../formulebasic/formulebasic.component";
import { FormuleavanceComponent } from "../formuleavance/formuleavance.component";
import { ModalHebergementComponent } from "../modal-hebergement/modal-hebergement.component";
import { ModalhebergementdoubleComponent } from "../modalhebergementdouble/modalhebergementdouble.component";
import { ModalsebergementsimpleComponent } from "../modalsebergementsimple/modalsebergementsimple.component";

@Component({
  selector: "app-fichelieu",
  templateUrl: "./fichelieu.component.html",
  styleUrls: ["./fichelieu.component.scss"],
})
export class FichelieuComponent implements OnInit {
  isShowButtonActive = false;
  isShowButtonFoodActive = false;

  isShowSpaceButtonActive = false;
  isShowStuffButtonActive = false;
  isShowActivityButtonActive = false;

  isCardRestaurationActive = false;

  isShowTarifButtonActive = false;
  isFavorite = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openFormuleBasic() {
    this.dialog.open(FormulebasicComponent);
  }
  openFormuleAvance() {
    this.dialog.open(FormuleavanceComponent);
  }
  openModalHerbegement() {
    this.dialog.open(ModalHebergementComponent);
  }
  openModalHerbegementSimple() {
    this.dialog.open(ModalsebergementsimpleComponent);
  }
  openModalHerbegementDouble() {
    this.dialog.open(ModalhebergementdoubleComponent);
  }

  toggleShowButton() {
    this.isShowButtonActive = !this.isShowButtonActive;
  }

  toggleShowFoodButton() {
    this.isShowButtonFoodActive = !this.isShowButtonFoodActive;
  }

  toggleSpaceShowButton() {
    this.isShowSpaceButtonActive = !this.isShowSpaceButtonActive;
  }

  toggleStuffShowButton() {
    this.isShowStuffButtonActive = !this.isShowStuffButtonActive;
  }
  toggleActivityShowButton() {
    this.isShowActivityButtonActive = !this.isShowActivityButtonActive;
  }

  toggleShowTarifButton() {
    this.isShowTarifButtonActive = !this.isShowTarifButtonActive;
  }

  toggleCardRestaution() {
    this.isCardRestaurationActive = !this.isCardRestaurationActive;
  }

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
  }
}
