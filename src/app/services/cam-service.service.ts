import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from "@capacitor/camera"

@Injectable({
  providedIn: 'root'
})
export class CamServiceService {

  public photo: Photo | null = null;

  constructor() {}

  async capturarFoto(): Promise<Photo> {
    const captura: Photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,  // ✅ <-- CAMBIA ESTO
      source: CameraSource.Camera,
      quality: 100
    });

    this.photo = captura;
    return captura;
  }

  // ✅ Método para obtener solo el base64
  async readAsBase64(foto: Photo): Promise<string> {
    return foto.dataUrl?.split(',')[1] || '';
  }
}
