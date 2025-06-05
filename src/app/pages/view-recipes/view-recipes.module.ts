import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecipesPageRoutingModule } from './view-recipes-routing.module';

import { ViewRecipesPage } from './view-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecipesPageRoutingModule
  ],
  declarations: [ViewRecipesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewRecipesPageModule {}
