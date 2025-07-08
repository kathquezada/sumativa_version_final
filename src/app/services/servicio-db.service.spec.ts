import { TestBed } from '@angular/core/testing';
import { ServicioDbService } from './servicio-db.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ServicioDbService', () => {
  let service: ServicioDbService;

  // Mock básico de SQLite
  const sqliteMock = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
      executeSql: jasmine.createSpy('executeSql').and.returnValue(Promise.resolve([]))
    }))
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServicioDbService,
        { provide: SQLite, useValue: sqliteMock }
      ]
    });

    service = TestBed.inject(ServicioDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
