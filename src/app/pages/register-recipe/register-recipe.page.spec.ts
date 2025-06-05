import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterRecipePage } from './register-recipe.page';

describe('RegisterRecipePage', () => {
  let component: RegisterRecipePage;
  let fixture: ComponentFixture<RegisterRecipePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
