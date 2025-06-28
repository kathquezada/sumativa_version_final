import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {
  this.crearUsuarioDePrueba();
}


  async onLogin() {
  const loading = await this.loadingCtrl.create({
    spinner: 'circles',
    message: 'Iniciando sesión...',
    backdropDismiss: false,
  });
  await loading.present();

  try {
    const user = await this.usuarioService.login(this.email, this.password);
    await loading.dismiss();

    if (user) {
      this.navCtrl.navigateRoot('/home');
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Usuario o contraseña incorrectos.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  } catch (err) {
    await loading.dismiss();
    const toast = await this.toastCtrl.create({
      message: 'Error al acceder a la base de datos.',
      duration: 3000,
      color: 'danger'
    });
    toast.present();
    console.error('Error en login:', err);
  }
}

async crearUsuarioDePrueba() {
  try {
    const user = await this.usuarioService.login('cristobal', '1234');
    if (!user) {
      await this.usuarioService.register({
        username: 'cristobal',
        password: '1234',
        nombre: 'Cristóbal Vera'
      });

      const toast = await this.toastCtrl.create({
        message: 'Usuario de prueba creado: cristobal / 1234',
        duration: 3000,
        color: 'success'
      });
      toast.present();
    }
  } catch (error) {
    console.error('Error creando usuario de prueba:', error);
  }
}


redRegister(){
    console.log("presionaste catalogo en home")
    this.router.navigate(['/register']);
  }


}
