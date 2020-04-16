import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';




import {MaterialModule} from './material/material.module';
import { BriefComponent } from './brief/brief.component';
import { SvgComponent } from './svg/svg.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InfoComplementaireComponent } from './info-complementaire/info-complementaire.component';
import { InfoComplementaire2Component } from './info-complementaire2/info-complementaire2.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from 'ngx-mat-datetime-picker';
import { NgxMatMomentModule } from 'ngx-mat-moment-adapter';
import { FaqComponent } from './faq/faq.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FichelieuComponent } from './fichelieu/fichelieu.component';
import { ImageLightboxComponent } from './components/image-lightbox/image-lightbox.component';
import {ImageService} from './image.service';
import { DevisgratuitComponent } from './devisgratuit/devisgratuit.component'




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
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMatMomentModule,
    NgxMaterialTimepickerModule,


  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
