import { IImagen } from './IImagen';
import { IEnlace } from './IEnlace';

export interface IArtista {
  imagen: IImagen;
  nombre: IEnlace;
  genero: string;
  pais: string;
  popularidad: number;
}
