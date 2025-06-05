import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string= '';

  constructor(
    public navCtrl:NavController, //creamos controlladores
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }
  

  async onLogin(){
    console.log("Logeaste")

    const loading:HTMLIonLoadingElement = await this.loadingCtrl.create({
      spinner:'circles',
      cssClass: 'custom-spinner',
      backdropDismiss: false, //para que el usuario no pueda cerrarlo
    });

    await loading.present(); // esperamos que carge

    setTimeout(async () => {
      
      await loading.dismiss();
      this.navCtrl.navigateRoot('/home')
    }, 3000)
  }

}
