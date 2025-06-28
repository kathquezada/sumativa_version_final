import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite, private storage: Storage) {
    this.initDB();
  }

  async initDB() {
    this.storage.create();

    this.dbInstance = await this.sqlite.create({
      name: 'recetas.db',
      location: 'default'
    });

    await this.dbInstance.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         username TEXT NOT NULL UNIQUE,
         password TEXT NOT NULL,
         nombre TEXT
       );`,
      []
    );
  }

  // Simular login desde SQLite
  async login(username: string, password: string): Promise<any | null> {
    const result = await this.dbInstance.executeSql(
      `SELECT * FROM users WHERE username = ? AND password = ?`,
      [username, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows.item(0);
      await this.saveToken(user);
      return user;
    }

    return null;
  }

  // Registro local
  async register(data: { username: string; password: string; nombre?: string }) {
    await this.dbInstance.executeSql(
      `INSERT INTO users (username, password, nombre) VALUES (?, ?, ?)`,
      [data.username, data.password, data.nombre || '']
    );
  }

  // Simulación de sesión
  async saveToken(user: any) {
    await this.storage.set('user', user);
  }

  async getToken(): Promise<any | null> {
    return await this.storage.get('user');
  }

  async logout() {
    await this.storage.remove('user');
  }

  async isLoggedIn(): Promise<boolean> {
    const user = await this.getToken();
    return !!user;
  }
}
