import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AuthService } from './services/auth.service'; // Importar AuthService
import { Observable } from 'rxjs'; // Importar Observable

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule], // Añadir CommonModule aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Agre-vida');
  isLoggedIn$: Observable<boolean>;
  currentUsername$: Observable<string | null>; // Nuevo Observable para el nombre de usuario

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.currentUsername$ = this.authService.currentUsername; // Suscribirse al nombre de usuario
  }

  logout(): void {
    this.authService.logout();
  }
}
