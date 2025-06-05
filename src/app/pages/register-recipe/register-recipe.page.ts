import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-recipe',
  templateUrl: './register-recipe.page.html',
  styleUrls: ['./register-recipe.page.scss'],
  standalone: false,
})
export class RegisterRecipePage implements OnInit {

  constructor(
    private alertController: AlertController
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
