import { Component } from '@angular/core';
import { IArtista } from '../interfaces/IArtista';

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [CommonModule, Artista],
  templateUrl: './artistas.html',
  styleUrls: ['./artistas.scss']
})

export class ArtistasComponent {
  artistas: IArtista[] = [
    {
      imagen: { src: 'https://picsum.photos/id/201/200/150', alt: 'Foto 1' },
      nombre: { text: 'Beyoncé', href: 'https://en.wikipedia.org/wiki/Beyoncé' },
      genero: 'Pop / R&B',
      pais: 'Estados Unidos',
      popularidad: 98
    },
    {
      imagen: { src: 'https://picsum.photos/id/202/200/150', alt: 'Foto 2' },
      nombre: { text: 'Bad Bunny', href: 'https://en.wikipedia.org/wiki/Bad_Bunny' },
      genero: 'Reggaetón / Trap',
      pais: 'Puerto Rico',
      popularidad: 95
    },
    {
      imagen: { src: 'https://picsum.photos/id/203/200/150', alt: 'Foto 3' },
      nombre: { text: 'Rosalía', href: 'https://en.wikipedia.org/wiki/Rosalía_(singer)' },
      genero: 'Flamenco / Urbano',
      pais: 'España',
      popularidad: 90
    }
  ];
}
