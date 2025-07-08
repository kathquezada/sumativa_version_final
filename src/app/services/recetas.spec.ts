import { Recetas } from './recetas';

describe('Recetas', () => {
  it('should create an instance', () => {
    const receta = new Recetas(
      1,
      'Paella',
      'Arroz, Mariscos, Azafrán',
      'Cocinar a fuego lento durante 40 minutos.',
      '40 minutos',
      'https://example.com/paella.jpg' // optional
    );
    expect(receta).toBeTruthy();
  });
});
