import { Component, Input } from '@angular/core';
import { IArtista } from '../interfaces/IArtista';
import { IImagen } from '../interfaces/IImagen';
import { IEnlace } from '../interfaces/IEnlace';

@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artista.html',
  styleUrls: ['./artista.scss']
})

export class ArtistaComponent implements IArtista {
  @Input() imagen: IImagen = {
    src: 'https://picsum.photos/200/150',
    alt: 'Foto del artista'
  };
  @Input() nombre: IEnlace = {
    text: 'Artista desconocido',
    href: '#'
  };
  @Input() genero: string = 'Género no definido';
  @Input() pais: string = 'País desconocido';
  @Input() popularidad: number = 0;
}
