import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterRecipePageRoutingModule } from './register-recipe-routing.module';
import { RegisterRecipePage } from './register-recipe.page';
import '@lottiefiles/lottie-player';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterRecipePageRoutingModule,
    SideMenuComponent
  ],
  declarations: [RegisterRecipePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterRecipePageModule {}
