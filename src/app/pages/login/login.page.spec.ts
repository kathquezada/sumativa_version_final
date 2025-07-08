import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// Mocks de servicios
const mockUsuarioService = jasmine.createSpyObj('UsuarioService', ['login', 'register']);
const mockNavCtrl = jasmine.createSpyObj('NavController', ['navigateRoot']);
const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
const mockLoading = jasmine.createSpyObj('HTMLIonLoadingElement', ['present', 'dismiss']);
const mockLoadingCtrl = jasmine.createSpyObj('LoadingController', ['create']);
const mockToast = jasmine.createSpyObj('HTMLIonToastElement', ['present']);
const mockToastCtrl = jasmine.createSpyObj('ToastController', ['create']);

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    // Configura los retornos de los mocks
    mockUsuarioService.login.and.returnValue(Promise.resolve(null));
    mockUsuarioService.register.and.returnValue(Promise.resolve());
    mockLoadingCtrl.create.and.returnValue(Promise.resolve(mockLoading));
    mockToastCtrl.create.and.returnValue(Promise.resolve(mockToast));

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: UsuarioService, useValue: mockUsuarioService },
        { provide: NavController, useValue: mockNavCtrl },
        { provide: LoadingController, useValue: mockLoadingCtrl },
        { provide: ToastController, useValue: mockToastCtrl },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should attempt to create test user on init', async () => {
    await component.ngOnInit();
    expect(mockUsuarioService.login).toHaveBeenCalledWith('cristobal', '1234');
  });

  it('should show toast and register user if not found', async () => {
    mockUsuarioService.login.and.returnValue(Promise.resolve(null)); // Usuario no existe
    await component.crearUsuarioDePrueba();
    expect(mockUsuarioService.register).toHaveBeenCalled();
    expect(mockToastCtrl.create).toHaveBeenCalled();
  });

  it('should navigate to /register on redRegister()', () => {
    component.redRegister();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/register']);
  });
});
