import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { SideMenuComponent } from './side-menu.component';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

// Mocks
const mockUsuarioService = jasmine.createSpyObj('UsuarioService', ['logout']);
const mockNavCtrl = jasmine.createSpyObj('NavController', ['navigateRoot']);
const mockActivatedRoute = {
  snapshot: {
    params: {},
    queryParams: {}
  }
};

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), SideMenuComponent],
      providers: [
        { provide: UsuarioService, useValue: mockUsuarioService },
        { provide: NavController, useValue: mockNavCtrl },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }  // ✅ importante
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout and redirect to login', async () => {
    await component.logout();
    expect(mockUsuarioService.logout).toHaveBeenCalled();
    expect(mockNavCtrl.navigateRoot).toHaveBeenCalledWith('/login');
  });
});
