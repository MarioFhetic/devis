import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {BriefComponent} from './brief/brief.component';
import {InfoComplementaireComponent} from './info-complementaire/info-complementaire.component';
import {InfoComplementaire2Component} from './info-complementaire2/info-complementaire2.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'brief', component: BriefComponent},
  { path: 'info-complementaire', component: InfoComplementaireComponent},
  { path: 'info-complementaire2', component: InfoComplementaire2Component},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
