import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRecipesPage } from './view-recipes.page';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { MealDbService } from 'src/app/services/mealdb.service';
import { of } from 'rxjs';

// Creamos mocks para los servicios
const mockServicioDbService = {
  buscarRecetas: jasmine.createSpy('buscarRecetas'),
  listaRecetas: of([{ id: 1, nombre: 'Tortilla' }]) // simula una receta
};

const mockMealDbService = {
  getCategories: jasmine.createSpy('getCategories').and.returnValue(of({
    categories: [{ idCategory: '1', strCategory: 'Beef' }]
  }))
};

describe('ViewRecipesPage', () => {
  let component: ViewRecipesPage;
  let fixture: ComponentFixture<ViewRecipesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRecipesPage],
      providers: [
        { provide: ServicioDbService, useValue: mockServicioDbService },
        { provide: MealDbService, useValue: mockMealDbService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipes from ServicioDbService', () => {
    expect(component.recetas.length).toBe(1);
    expect(component.recetas[0].nombre).toBe('Tortilla');
  });

  it('should load categories from MealDbService', () => {
    expect(component.categories.length).toBe(1);
    expect(component.categories[0].strCategory).toBe('Beef');
  });
});
