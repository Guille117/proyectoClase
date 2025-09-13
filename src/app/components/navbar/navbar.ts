import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  img = 'imagenes/logo_umg.png';

  constructor() {}

  ngOnInit() {
    // Código a ejecutar al inicializar el componente
  }
}