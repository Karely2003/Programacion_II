import { Routes } from '@angular/router';
import { Pokedex } from './pokedex/pokedex';
import { Frutas } from './frutas/frutas';

export const routes: Routes = [
     {
        path: '', component: Frutas
    },
    {
        path: 'peliculas', component: Frutas
    },
    {
        path: 'pokedex', component: Pokedex
    }
];
