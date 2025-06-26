import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera"

@Injectable({
  providedIn: 'root'
})
export class CamServiceService {

  public photo : Photo | null = null; // foto puede ser publica
  constructor() { }

  async capturarFoto(): Promise<Photo>{    
    // creamos constant photo, donde espera camara par aobtener photo,donde nos da la url y source indica donde esta la camara.
    const captura: Photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera,
      quality: 100
    });
    this.photo = captura;
    return captura;

  }
}
//<>
