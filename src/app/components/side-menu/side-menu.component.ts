import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports:[IonicModule, RouterModule],
 
})
export class SideMenuComponent  implements OnInit {

  constructor(private usuarioService: UsuarioService, private navCtrl: NavController) {}



  ngOnInit() {
    console.log("cargo menu")
  }

  async logout() {
    await this.usuarioService.logout();
    this.navCtrl.navigateRoot('/login');
  }

}
