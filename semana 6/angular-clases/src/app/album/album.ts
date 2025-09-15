import { Component, Input } from '@angular/core';
import { IAlbum } from '../interfaces/IAlbum';
import { IEnlace } from '../interfaces/IEnlace';
import { IImagen } from '../interfaces/IImagen';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.html',
  styleUrls: ['./album.scss']
})

export class AlbumComponent implements IAlbum {
  @Input() imagen: IImagen = {
    src: 'https://picsum.photos/200/150',
    alt: 'Portada del álbum'
  };
  @Input() titulo: IEnlace = {
    text: 'Álbum sin título',
    href: '#'
  };
  @Input() anio: number = 0;
  @Input() duracion: string = '0m';
  @Input() clasificacion: 'Todo público' | 'Explícito' | 'Instrumental' = 'Todo público';
  @Input() puntaje: number = 0;
}
