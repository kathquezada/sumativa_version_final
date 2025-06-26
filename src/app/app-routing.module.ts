import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // importamos guard

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [authGuard] // aquí usas tu guard
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-recipe',
    loadChildren: () => import('./pages/register-recipe/register-recipe.module').then( m => m.RegisterRecipePageModule),
    //canActivate: [authGuard] // aquí usas tu guard
  },
  {
    path: 'view-recipes',
    loadChildren: () => import('./pages/view-recipes/view-recipes.module').then( m => m.ViewRecipesPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
   {
    path: '**', // 🚨 RUTA COMODÍN
    redirectTo: 'not-found'
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
