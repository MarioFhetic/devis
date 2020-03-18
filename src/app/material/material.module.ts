import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
} from '@angular/material/button';

import {
  MatButtonToggleModule,
} from '@angular/material/button-toggle';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatIconModule,
  FlexLayoutModule,
  MatDatepickerModule,
  MatInputModule,
  MatCheckboxModule,
  MatSlideToggleModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}