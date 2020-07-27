import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MaterialModule } from "./material/material.module";
import { BriefComponent } from "./brief/brief.component";
import { SvgComponent } from "./svg/svg.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { InfoComplementaireComponent } from "./info-complementaire/info-complementaire.component";
import { InfoComplementaire2Component } from "./info-complementaire2/info-complementaire2.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { MatMenuModule } from "@angular/material/menu";

import { MatDatepickerModule } from "@angular/material/datepicker";

import { FaqComponent } from "./faq/faq.component";
import { FichelieuComponent } from "./fichelieu/fichelieu.component";
import { ImageLightboxComponent } from "./components/image-lightbox/image-lightbox.component";
import { ImageService } from "./image.service";
import { DevisgratuitComponent } from "./devisgratuit/devisgratuit.component";

import { MatDialogModule } from "@angular/material/dialog";
import { DialogExempleComponent } from "./dialog-exemple/dialog-exemple.component";
import { DialogparticipantsComponent } from "./dialogparticipants/dialogparticipants.component";
import { DialogbudgetComponent } from "./dialogbudget/dialogbudget.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormulebasicComponent } from "./formulebasic/formulebasic.component";
import { FormuleavanceComponent } from "./formuleavance/formuleavance.component";
import { ModalHebergementComponent } from "./modal-hebergement/modal-hebergement.component";
import { ModalsebergementsimpleComponent } from "./modalsebergementsimple/modalsebergementsimple.component";
import { ModalhebergementdoubleComponent } from "./modalhebergementdouble/modalhebergementdouble.component";
import { DialogdateComponent } from "./dialogdate/dialogdate.component";
import { AutorefComponent } from "./autoref/autoref.component";
import { TestwidgetComponent } from "./testwidget/testwidget.component";
import { HomewebzineComponent } from "./homewebzine/homewebzine.component";
import { WebzineActuComponent } from "./webzine-actu/webzine-actu.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    BriefComponent,
    SvgComponent,
    MainNavComponent,
    InfoComplementaireComponent,
    InfoComplementaire2Component,
    ConfirmationComponent,
    FaqComponent,
    FichelieuComponent,
    ImageLightboxComponent,
    DevisgratuitComponent,
    DialogExempleComponent,
    DialogparticipantsComponent,
    DialogbudgetComponent,
    FormulebasicComponent,
    FormuleavanceComponent,
    ModalHebergementComponent,
    ModalsebergementsimpleComponent,
    ModalhebergementdoubleComponent,
    DialogdateComponent,
    AutorefComponent,
    TestwidgetComponent,
    HomewebzineComponent,
    WebzineActuComponent,
  ],
  entryComponents: [
    DialogExempleComponent,
    DialogparticipantsComponent,
    DialogbudgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMomentDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
