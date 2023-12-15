import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from "./components/month-view/month-view.component";

const routes: Routes = [
  {
    path: '', component: MonthViewComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
