import { IEnlace } from "./IEnlace";
import { IImagen } from "./IImagen";

export interface IAlbum {
  imagen: IImagen;
  titulo: IEnlace;
  anio: number;
  duracion: string;
  clasificacion: "Todo público" | "Explícito" | "Instrumental";
  puntaje: number;
}

