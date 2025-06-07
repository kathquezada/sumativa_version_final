import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-recipe',
  templateUrl: './register-recipe.page.html',
  styleUrls: ['./register-recipe.page.scss'],
  standalone: false,
})
export class RegisterRecipePage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async confirmarRegistro() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas registrar esta receta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Registro cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.registerRecipe();
            this.router.navigate(['/view-recipes']);
          }
        }
      ]
    });

    await alert.present();
  }

  registerRecipe(){
    console.log("Receta registrada")
  }

}
