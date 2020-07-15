import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { BriefComponent } from "./brief/brief.component";
import { InfoComplementaireComponent } from "./info-complementaire/info-complementaire.component";
import { InfoComplementaire2Component } from "./info-complementaire2/info-complementaire2.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { FichelieuComponent } from "./fichelieu/fichelieu.component";
import { AutorefComponent } from "./autoref/autoref.component";
import { TestwidgetComponent } from "./testwidget/testwidget.component";
import { HomewebzineComponent } from "./homewebzine/homewebzine.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: ListComponent },
  { path: "brief", component: BriefComponent },
  { path: "info-complementaire", component: InfoComplementaireComponent },
  { path: "info-complementaire2", component: InfoComplementaire2Component },
  { path: "confirmation", component: ConfirmationComponent },
  { path: "fichelieu", component: FichelieuComponent },
  { path: "autoref", component: AutorefComponent },
  { path: "testwidget", component: TestwidgetComponent },
  { path: "homewebzine", component: HomewebzineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
