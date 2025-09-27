import { Component, OnInit } from '@angular/core';
import { Fruta } from "../fruta/fruta";
import { IFruta } from '../interfaces/IFruta';
import { Reproduccion } from '../reproduccion';

@Component({
  selector: 'app-frutas',
  imports: [Fruta],
  templateUrl: './frutas.html',
  styleUrl: './frutas.scss'
})
export class Frutas implements OnInit {
  constructor(public ReproduccionService: Reproduccion){}

  ngOnInit(): void {
    this.ReproduccionService.listarColaReproduccion()
  }

  frutas: IFruta[] = [
    {
      imagen: {
        src: 'https://www.fruitsinfo.com/images/pineapple.png',
        alt: 'Portada'
      },
      Nombre: {
        texto: 'Fruta piña',
        href: 'https://www.fruitsinfo.com/pine_apples.htm'
      },
      Forma: 'Cilindrica',
        Sabor: 'Dulce y acido',
      Color: 'amarilla y verde',
      
    },
    {
      imagen: {
        src: 'https://www.fruitsinfo.com/images/kiwis.png',
        alt: 'Portada segunda fruta'
      },
      Nombre: {
        texto: 'Fruta kiwi',
        href: 'https://www.fruitsinfo.com/kiwis.htm'
      },
      Forma: 'ovalada',
      Sabor: 'Agridulce',
      Color: 'marron y cubierta de  vellos',
    },
    {
      imagen: {
        src: 'https://www.fruitsinfo.com/images/cantaloupe.png',
        alt: 'Portada tercera fruta'
      },
      Nombre: {
        texto: 'Melon',
        href: 'https://www.fruitsinfo.com/cantaloupe.htm'
      },
       Forma: 'ovalada',
      Sabor: 'Dulce',
      Color: 'verde',
    }
  ]

  
}



