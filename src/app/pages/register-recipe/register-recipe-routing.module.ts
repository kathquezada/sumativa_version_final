import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterRecipePage } from './register-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRecipePageRoutingModule {}
