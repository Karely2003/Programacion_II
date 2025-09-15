import { IEnlace } from "./IEnlace"
import { IImagen } from "./IImagen"


 export interface IMusica{
         imagen: IImagen
         Cancion: IEnlace 
         Artista:IEnlace 
         Duracion: string
         categoria: "Urbana" | "Bachata" | "Reegueton" |"salsa" | "Cristiana"
 }



