import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRecipesPage } from './view-recipes.page';

describe('ViewRecipesPage', () => {
  let component: ViewRecipesPage;
  let fixture: ComponentFixture<ViewRecipesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
