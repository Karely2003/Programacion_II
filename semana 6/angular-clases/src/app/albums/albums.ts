import { Component } from '@angular/core';
import { IAlbum } from '../interfaces/IAlbum';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, Album],
  templateUrl: './albums.html',
  styleUrls: ['./albums.scss']
})

export class AlbumsComponent {
  albums: IAlbum[] = [
    {
      imagen: { src: 'https://picsum.photos/id/101/200/150', alt: 'Portada 1' },
      titulo: { text: 'Thriller', href: 'https://en.wikipedia.org/wiki/Thriller_(album)' },
      anio: 1982,
      duracion: '42m',
      clasificacion: 'Todo público',
      puntaje: 95
    },
    {
      imagen: { src: 'https://picsum.photos/id/102/200/150', alt: 'Portada 2' },
      titulo: { text: 'Back in Black', href: 'https://en.wikipedia.org/wiki/Back_in_Black' },
      anio: 1980,
      duracion: '41m',
      clasificacion: 'Explícito',
      puntaje: 90
    },
    {
      imagen: { src: 'https://picsum.photos/id/103/200/150', alt: 'Portada 3' },
      titulo: { text: 'Kind of Blue', href: 'https://en.wikipedia.org/wiki/Kind_of_Blue' },
      anio: 1959,
      duracion: '46m',
      clasificacion: 'Instrumental',
      puntaje: 98
    }
  ];
}
