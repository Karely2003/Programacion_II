import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Reproduccion } from './reproduccion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    protected title = 'hola-mundo';
     descripcion = 'esta es mi pagina inicial';

     constructor(public ReproduccionService: Reproduccion){}
}
