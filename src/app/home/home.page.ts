import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CamServiceService } from '../services/cam-service.service';
import { Photo } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  //variables para interpolar imagenes de la pagina
  
  //componente Card 1
  titCardI: string;
  subtitCardI: string;
  txtContentCardI: string;
  
  // Card 2
  titleCardII : string;
  subtitleCardII : string;
  contentCardII : string;

  //componente Card List 2
  //texto
  titleCardList: string;
  subtitleCardList: string;
  labelCardList: string;
  labelCardListI: string;
  labelCardListII: string;
  labelCardListIII: string;
  imgCardI: string;
  imgCardListI: string;
  imgCardListII: string;
  imgCardListIII: string;
  imgCardListIV: string;


  public vistadefoto: string | undefined;

  constructor(
    private router: Router,
    private serviciocamara: CamServiceService

  ) {
    // Interpolacion imagen en Login
    this.titCardI = 'FoodRecipeApp'    
    this.subtitCardI ='APLICACIÓN DE RECETAS'
    this.txtContentCardI ='Registra tus recetas favoritas, y cocina todo lo que quieras.'
    
    //Interpolacion card 2
    this.imgCardI = 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    this.titleCardII = 'Registrar nueva receta'
    this.subtitleCardII = 'Nueva receta'
    this.contentCardII = 'Presiona aca para ser redirigido a la seccion para crear recetas.'

    // Cards en otro componente lista
    this.titleCardList = 'Organiza tus preparaciones'
    this.subtitleCardList = 'FoodRecipeApp'
    this.labelCardList = 'Comidas'
    this.labelCardListI = 'Postres'
    this.labelCardListII = 'Refrescos'
    this.labelCardListIII = 'Tiempos'
    this.imgCardListI = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    this.imgCardListII = 'https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    this.imgCardListIII = 'https://plus.unsplash.com/premium_photo-1664472743686-4bd63ad502fd?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    this.imgCardListIV = 'https://images.unsplash.com/photo-1602162786736-1575a5b1be76?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  async tomarFoto(): Promise<void>{
    const foto : Photo = await this.serviciocamara.capturarFoto();
    this.vistadefoto = foto.webPath;
  }

  redHome(){
    console.log("presionaste catalogo en home")
    this.router.navigate(['/view-recipes']);
  }

  redNewRecipe(){
    
    this.router.navigate(['/register-recipe']);
  }

}
