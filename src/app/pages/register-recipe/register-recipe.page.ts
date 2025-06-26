import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { Recetas } from 'src/app/services/recetas';


@Component({
  selector: 'app-register-recipe',
  templateUrl: './register-recipe.page.html',
  styleUrls: ['./register-recipe.page.scss'],
  standalone: false,
})
export class RegisterRecipePage implements OnInit {
  // Enlazamos los inputs
  @ViewChild('nombreInput') nombreInput!: IonInput;
  @ViewChild('ingredientesInput') ingredientesInput!: IonInput;
  @ViewChild('instruccionesInput') instruccionesInput!: IonInput;
  @ViewChild('tiempoInput') tiempoInput!: IonInput;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private db: ServicioDbService
  ) {}

  ngOnInit() {}

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
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.registerRecipe();
            this.router.navigate(['/view-recipes']);
          },
        },
      ],
    });

    await alert.present();
  }

  registerRecipe() {
    const receta = new Recetas(
      0, // el ID es autoincremental
      this.nombreInput.value?.toString() || '',
      this.ingredientesInput.value?.toString() || '',
      this.instruccionesInput.value?.toString() || '',
      this.tiempoInput.value?.toString() || ''
    );

    if (
      receta.nombre.trim() === '' ||
      receta.ingredientes.trim() === '' ||
      receta.instrucciones.trim() === '' ||
      receta.tiempo.trim() === ''
    ) {
      this.db.presentToast('Completa todos los campos.');
      return;
    }

    this.db.agregarReceta(receta);
    console.log('Receta registrada');
  }

}
