import { Component, OnInit } from '@angular/core';
import '@lottiefiles/lottie-player';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.page.html',
  styleUrls: ['./view-recipes.page.scss'],
  standalone:false,
})
export class ViewRecipesPage implements OnInit {

  constructor() { }

  recipes = [
    {
      imagen : 'https://th.bing.com/th/id/OIP.DvOvIJ-XTfMgFKreCxzM7gHaE7?rs=1&pid=ImgDetMain',
      nombre : 'Sushi casero',
      ingredientes : 'Arroz, vinagre y azucar, proteina (preferencia pescado crudo fresco), Verduras (Avocado, Pepino, Cibboulette), Alga nori',
      instrucciones : 'Para hacer sushi casero, cocina arroz especial para sushi, enfríalo y mézclalo con vinagre de arroz, azúcar y sal. Sobre una hoja de alga nori colocada en una esterilla, extiende el arroz dejando un borde libre, añade tus ingredientes favoritos (como salmón, palta, pepino o kanikama), enrolla con firmeza usando la esterilla, y corta con un cuchillo húmedo en porciones. Sirve con salsa de soya, jengibre encurtido y wasabi.',
      tiempo : '1 Hora',

    },
    {
    imagen: 'https://1.bp.blogspot.com/-ULKcyhguwPc/VNGBD9Hkn5I/AAAAAAAADQE/JPuvM8GaCzc/s1600/7368790678_571395cde9_o.jpg',
    nombre: 'Ensalada César',
    ingredientes: 'Lechuga romana, pollo a la plancha, crutones, queso parmesano, aderezo César',
    instrucciones: 'Lava la lechuga, corta el pollo cocido en tiras. Mezcla todo con crutones, queso y aderezo. Sirve fría.',
    tiempo: '15 minutos',
  },
  {
    imagen: 'https://th.bing.com/th/id/OIP.iJND3bc2IQ-GRIxI9I1hZwHaEo?w=256&h=180&c=7&r=0&o=5&pid=1.7',
    nombre: 'Panqueques con miel',
    ingredientes: 'Harina, leche, huevos, azúcar, sal, mantequilla, miel',
    instrucciones: 'Mezcla los ingredientes hasta obtener una masa líquida. Cocina en sartén antiadherente y sirve con miel o frutas.',
    tiempo: '20 minutos',
  },
  {
    imagen: 'https://okdiario.com/img/recetas/2017/08/04/espaguetis-queso.jpg',
    nombre: 'Pasta al pesto',
    ingredientes: 'Pasta, albahaca, ajo, piñones, queso parmesano, aceite de oliva',
    instrucciones: 'Cocina la pasta. Licúa albahaca, ajo, piñones, queso y aceite hasta obtener pesto. Mezcla con la pasta caliente y sirve.',
    tiempo: '30 minutos',
  },
  {
    imagen: 'https://buenavibra.es/wp-content/uploads/2018/08/dsc_7427_opt.jpg',
    nombre: 'Tostadas con palta',
    ingredientes: 'Pan integral, palta, limón, sal, pimienta, huevo (opcional)',
    instrucciones: 'Tuesta el pan. Machaca la palta con limón, sal y pimienta. Unta sobre el pan y agrega huevo si deseas.',
    tiempo: '10 minutos',
  },
  ]

  ngOnInit() {
  }

}
