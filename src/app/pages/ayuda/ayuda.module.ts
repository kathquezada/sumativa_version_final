import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaPageRoutingModule } from './ayuda-routing.module';
import { AyudaPage } from './ayuda.page';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuComponent,    
    AyudaPageRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [AyudaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AyudaPageModule {}
