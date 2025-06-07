import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
  standalone:false,
})
export class AyudaPage implements OnInit {

  data = [
  {
    pregunta: '¿Cómo puedo registrar una receta?',
    respuesta: 'Actualmente puedes registrar recetas ingresando el nombre, ingredientes y pasos. Muy pronto podrás agregar fotos y categorías personalizadas.'
  },
  {
    pregunta: '¿Necesito una cuenta para usar la app?',
    respuesta: 'Sí, debes registrarte para guardar tus recetas, acceder a tus favoritas y sincronizar tus datos en todos tus dispositivos.'
  },
  {
    pregunta: '¿Puedo ver recetas de otros usuarios?',
    respuesta: 'Por ahora solo puedes ver tus propias recetas, pero en la versión final podrás explorar y guardar recetas de la comunidad.'
  },
  {
    pregunta: '¿Cuándo estará lista la versión completa?',
    respuesta: 'Estamos trabajando en nuevas funciones como filtros por tipo de comida, valoración de recetas y modo offline. ¡Muy pronto estarán disponibles!'
  },
  {
    pregunta: '¿Se pueden marcar recetas como favoritas?',
    respuesta: 'Esa función estará activa en la próxima actualización. Por ahora, puedes consultar tu historial de recetas agregadas.'
  }
];



  constructor() { }

  ngOnInit() {
  }

}
