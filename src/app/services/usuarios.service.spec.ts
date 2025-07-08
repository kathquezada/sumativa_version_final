import { TestBed } from '@angular/core/testing';
import { UsuarioService } from './usuarios.service';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Storage } from '@ionic/storage-angular';

describe('UsuarioService', () => {
  let service: UsuarioService;

  // Mock del SQLiteObject
  const sqliteObjectMock: Partial<SQLiteObject> = {
    executeSql: jasmine.createSpy('executeSql').and.callFake((query: string, params: any[]) => {
      if (query.includes('SELECT')) {
        return Promise.resolve({
          rows: {
            length: 1,
            item: () => ({
              id: 1,
              username: 'cristobal',
              password: '1234',
              nombre: 'Cristóbal Vera'
            })
          }
        });
      }
      return Promise.resolve({ rows: { length: 0 } });
    })
  };

  // Mock de SQLite
  const sqliteMock = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve(sqliteObjectMock))
  };

  // Mock de Storage
  const storageMock = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve()),
    set: jasmine.createSpy('set').and.returnValue(Promise.resolve()),
    get: jasmine.createSpy('get').and.returnValue(Promise.resolve(null)),
    remove: jasmine.createSpy('remove').and.returnValue(Promise.resolve())
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        UsuarioService,
        { provide: SQLite, useValue: sqliteMock },
        { provide: Storage, useValue: storageMock }
      ]
    }).compileComponents();

    service = TestBed.inject(UsuarioService);

    // ⚠️ Inicializamos la base de datos antes de probar cualquier método
    await service.initDB();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a new user', async () => {
    await service.register({ username: 'nuevo', password: '5678', nombre: 'Nuevo Usuario' });

    expect(sqliteObjectMock.executeSql).toHaveBeenCalledWith(
      jasmine.stringMatching(/^INSERT INTO users/),
      ['nuevo', '5678', 'Nuevo Usuario']
    );
  });

  it('should login a user successfully', async () => {
    const user = await service.login('cristobal', '1234');
    expect(user).toBeTruthy();
    expect(user.username).toBe('cristobal');
    expect(storageMock.set).toHaveBeenCalledWith('user', jasmine.any(Object));
  });

  it('should logout a user', async () => {
    await service.logout();
    expect(storageMock.remove).toHaveBeenCalledWith('user');
  });

  it('should return true if logged in', async () => {
    storageMock.get = jasmine.createSpy().and.returnValue(Promise.resolve({ username: 'cristobal' }));
    const loggedIn = await service.isLoggedIn();
    expect(loggedIn).toBeTrue();
  });

  it('should return false if not logged in', async () => {
    storageMock.get = jasmine.createSpy().and.returnValue(Promise.resolve(null));
    const loggedIn = await service.isLoggedIn();
    expect(loggedIn).toBeFalse();
  });
});
