import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-comentario',
  imports: [NgFor],
  templateUrl: './list-comentario.html',
  styleUrl: './list-comentario.scss'
})
export class ListComentario {
  listComentarios: Comentario[] = [
    {titulo: 'Comentario 1', creador: 'usuario 1', texto: 'comentario de prueba', fechaCreacion: new Date('2023-01-01')},
    {titulo: 'Comentario 2', creador: 'usuario 1', texto: 'comentario de prueba', fechaCreacion: new Date('2023-01-01')},
    {titulo: 'Comentario 3', creador: 'usuario 1', texto: 'comentario de prueba', fechaCreacion: new Date('2023-01-01')},
    {titulo: 'Comentario 4', creador: 'usuario 1', texto: 'comentario de prueba', fechaCreacion: new Date('2023-01-01')}
  ]
}
