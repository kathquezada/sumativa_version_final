import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports:[IonicModule, RouterModule],
 
})
export class SideMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("cargo menu")
  }

}
