import { Component, OnInit } from '@angular/core';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { Recetas } from 'src/app/services/recetas';
import '@lottiefiles/lottie-player';
import { MealDbService } from 'src/app/services/mealdb.service';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.page.html',
  styleUrls: ['./view-recipes.page.scss'],
  standalone: false,
})
export class ViewRecipesPage implements OnInit {
  categories: any[] = [];
  recetas: Recetas[] = [];

  constructor(
     private db: ServicioDbService,
     private mealDbService: MealDbService 
  ) {}


  ngOnInit() {
    this.db.buscarRecetas(); // carga las recetas desde srvicio con la funcion SQLite
    this.db.listaRecetas.subscribe((res) => {
      this.recetas = res;
      console.log('Recetas cargadas:', res);
    });
    this.mealDbService.getCategories().subscribe(response => {
        this.categories = response.categories;
        console.log(this.categories);
      });
  }

}
