import { Component, Input } from '@angular/core';
import {IFruta} from '../interfaces/IFruta';
import { IEnlace } from '../interfaces/IEnlace';
import { IImagen } from '../interfaces/IImagen';


@Component({
  selector: 'app-fruta',
  imports: [],
  templateUrl: './fruta.html',
  styleUrl: './fruta.scss'
})
export class Fruta implements IFruta {
  @Input () imagen: IImagen = {
    src:'https://www.fruitsinfo.com/images/pineapple.png',
    alt: 'Piña'
  };
  @Input() Nombre: IEnlace = {
    texto: 'Sin titulo',
    href: 'https://www.fruitsinfo.com/pine_apples.htm'
  };
  @Input() Forma: string = 'cilíndrica';
  @Input() Sabor: string = 'Dulce y acido';
  @Input() Color: string = 'amarillo verdoso';


}
