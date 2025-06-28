import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Recetas } from './recetas';

export interface Receta {
  id: number;
  nombre: string;
  ingredientes: string;
  instrucciones: string;
  tiempo: string;
  imagen?: string  // opcional
  
  
}

@Injectable({
  providedIn: 'root',
})
export class ServicioDbService {
  public database!: SQLiteObject;
  

  // SQL para crear tabla de recetas
  private sqlCrearRecetas: string = `
    CREATE TABLE IF NOT EXISTS receta (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      ingredientes TEXT,
      instrucciones TEXT,
      tiempo TEXT,
      imagen TEXT

    )`;

  // Observable para manejar recetas en tiempo real
  public listaRecetas = new BehaviorSubject<Recetas[]>([]);
  private isDBReady = new BehaviorSubject<boolean>(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.platform.ready().then(() => {
      this.crearBD();
    });
  }

  getDatabaseState() {
    return this.isDBReady.asObservable();
  }

  // Toast
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe',
    });
    await toast.present();
  }

  

  // Alert
  async presentAlerte(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

  crearBD() {
  this.sqlite.create({
    name: 'recetas.db',
    location: 'default',
  })
  .then((db: SQLiteObject) => {
    this.database = db;    
    this.crearTablas()     
  })
  .catch((e) => {
    this.presentToast('Error al crear BD: ' + e);
  });
}


  async crearTablas() {
    try {
      await this.database.executeSql(this.sqlCrearRecetas, []);
      this.buscarRecetas();
      this.isDBReady.next(true);
    } catch (e) {
      this.presentToast('Error al crear tablas: ' + e);
    }
  }

  // Insertar nueva receta
  async agregarReceta(receta: Omit<Recetas, 'id'>) {
    const sql = `INSERT INTO receta (nombre, ingredientes, instrucciones, tiempo, imagen)
                VALUES (?, ?, ?, ?, ?)`;
    const data = [receta.nombre, receta.ingredientes, receta.instrucciones, receta.tiempo, receta.imagen];
    try {
      await this.database.executeSql(sql, data);
      this.presentToast('Receta guardada');
      this.buscarRecetas();
    } catch (e) {
      this.presentToast('Error al guardar receta: ' + e);
    }
  }


  // Método para buscar recetas
  async buscarRecetas(): Promise<void> {
  try {
    const res = await this.database.executeSql('SELECT * FROM receta', []);
    const items: Recetas[] = [];
    for (let i = 0; i < res.rows.length; i++) {
      const r = res.rows.item(i);
      items.push(new Recetas(r.id, r.nombre, r.ingredientes, r.instrucciones, r.tiempo, r.imagen));
    }
    this.listaRecetas.next(items);
  } catch (e) {
    this.presentToast('Error al obtener recetas: ' + e);
  }
}


}
