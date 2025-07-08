import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

// Mocks de servicios
const mockUsuarioService = jasmine.createSpyObj('UsuarioService', ['register']);
const mockNavCtrl = jasmine.createSpyObj('NavController', ['navigateRoot']);
const mockLoading = jasmine.createSpyObj('HTMLIonLoadingElement', ['present', 'dismiss']);
const mockToast = jasmine.createSpyObj('HTMLIonToastElement', ['present']);
const mockToastCtrl = jasmine.createSpyObj('ToastController', ['create']);

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    mockUsuarioService.register.and.returnValue(Promise.resolve());
    mockToastCtrl.create.and.returnValue(Promise.resolve(mockToast));

    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      providers: [
        { provide: UsuarioService, useValue: mockUsuarioService },
        { provide: NavController, useValue: mockNavCtrl },
        { provide: ToastController, useValue: mockToastCtrl },
        { provide: LoadingController, useValue: mockLoading }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register user and navigate to login', async () => {
    // Set datos para el registro
    component.username = 'testuser';
    component.password = '1234';

    await component.onRegister();

    expect(mockUsuarioService.register).toHaveBeenCalledWith({
      username: 'testuser',
      password: '1234'
    });

    expect(mockToastCtrl.create).toHaveBeenCalled();
    expect(mockNavCtrl.navigateRoot).toHaveBeenCalledWith('/login');
  });

  it('should show error toast on register failure', async () => {
    mockUsuarioService.register.and.returnValue(Promise.reject('Error'));
    await component.onRegister();

    expect(mockToastCtrl.create).toHaveBeenCalled();
  });
});
