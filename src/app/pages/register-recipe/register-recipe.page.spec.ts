import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterRecipePage } from './register-recipe.page';
import { ServicioDbService } from 'src/app/services/servicio-db.service';
import { CamServiceService } from 'src/app/services/cam-service.service';
import { AlertController } from '@ionic/angular';

describe('RegisterRecipePage', () => {
  let component: RegisterRecipePage;
  let fixture: ComponentFixture<RegisterRecipePage>;

  const mockDbService = jasmine.createSpyObj('ServicioDbService', ['agregarReceta', 'presentToast']);
  const mockCamService = jasmine.createSpyObj('CamServiceService', ['capturarFoto']);
  const mockAlertCtrl = jasmine.createSpyObj('AlertController', ['create']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ServicioDbService, useValue: mockDbService },
        { provide: CamServiceService, useValue: mockCamService },
        { provide: AlertController, useValue: mockAlertCtrl }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register recipe successfully', () => {
    // ⚠️ Simulamos los valores de los ViewChild manualmente
    component['nombreInput'] = { value: 'Pizza' } as any;
    component['ingredientesInput'] = { value: 'Queso, tomate' } as any;
    component['instruccionesInput'] = { value: 'Hornear 20 minutos' } as any;
    component['tiempoInput'] = { value: '30' } as any;

    component.vistadefoto = 'data:image/png;base64,...'; // usamos una imagen falsa
    component.selectedImageBase64 = '';

    component.registerRecipe();

    // ✅ Verificamos que se haya llamado agregarReceta
    expect(mockDbService.agregarReceta).toHaveBeenCalled();
  });
});
