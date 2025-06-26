import { Component, OnInit } from '@angular/core';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { Recetas } from 'src/app/services/recetas';
import '@lottiefiles/lottie-player';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.page.html',
  styleUrls: ['./view-recipes.page.scss'],
  standalone: false,
})
export class ViewRecipesPage implements OnInit {
  recetas: Recetas[] = [];

  constructor(private db: ServicioDbService) {}

  ngOnInit() {
    this.db.buscarRecetas(); // carga las recetas desde SQLite
    this.db.listaRecetas.subscribe((res) => {
      this.recetas = res;
      console.log('📦 Recetas cargadas:', res);
    });
  }

}
