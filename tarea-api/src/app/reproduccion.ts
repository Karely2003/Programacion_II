import { Injectable } from '@angular/core';
import { IFruta } from './interfaces/IFruta';
import { IFrutaResumen } from './interfaces/IFrutaResumen';


@Injectable({
  providedIn: 'root'
})
export class Reproduccion {
  reproduccion : IFruta[] = []

  agregarFruta(fruta: IFruta){
    console.log("Agregando la fruta", fruta.Nombre, "a la cola de reproduccion")
    this.reproduccion.push(fruta)
  }

  listarColaReproduccion(): IFrutaResumen[]{
    console.log("Listando la cola de reproducccion")
    const listadoFrutas = this.reproduccion.map<IFrutaResumen>((fruta, i) =>
       {
        return {
          no: i+1,
          Nombre: fruta.Nombre.texto
        }
       }
    )
    console.log(listadoFrutas)
    return listadoFrutas
  }
}


  