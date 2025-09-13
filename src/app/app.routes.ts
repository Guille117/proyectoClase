import { Routes } from '@angular/router';
import { ListComentario } from './components/list-comentario/list-comentario';
import { AgregarEditarComentario } from './components/agregar-editar-comentario/agregar-editar-comentario';
import { VerComentario } from './components/ver-comentario/ver-comentario';

export const routes: Routes = [
    {   path: '', component: ListComentario},
    {   path: 'agregar', component: AgregarEditarComentario },
    {   path: 'editar/:id', component: AgregarEditarComentario },
    {   path: 'ver/:id', component: VerComentario },
    {   path: '**', redirectTo: '', pathMatch: 'full'}
];