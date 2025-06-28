// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../services/usuarios.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  const isLogged = await usuarioService.isLoggedIn();

  if (isLogged) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
