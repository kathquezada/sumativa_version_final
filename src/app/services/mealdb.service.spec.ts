import { TestBed } from '@angular/core/testing';
import { MealDbService } from './mealdb.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MealDbService', () => {
  let service: MealDbService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MealDbService]
    });

    service = TestBed.inject(MealDbService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch meal categories', () => {
    const dummyResponse = {
      categories: [
        { idCategory: '1', strCategory: 'Beef' },
        { idCategory: '2', strCategory: 'Chicken' }
      ]
    };

    service.getCategories().subscribe((res) => {
      expect(res.categories.length).toBe(2);
      expect(res.categories[0].strCategory).toBe('Beef');
    });

    const req = httpMock.expectOne('https://www.themealdb.com/api/json/v1/1/categories.php');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
