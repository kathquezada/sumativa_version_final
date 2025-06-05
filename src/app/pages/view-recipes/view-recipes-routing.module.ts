import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecipesPage } from './view-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecipesPageRoutingModule {}
