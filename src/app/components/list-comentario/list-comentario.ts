import { Component } from '@angular/core';
import { Comentario } from '../../interfaces/comentario';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ComentarioService } from '../../services/comentario';


@Component({
  selector: 'app-list-comentario',
  imports: [RouterLink],
  templateUrl: './list-comentario.html',
  styleUrl: './list-comentario.scss'
})
export class ListComentario {
  ListComentarios: Comentario[] =[];

constructor(private readonly ComentarioServ: ComentarioService) { }

  ngOnInit() {
    this.getComentarios();
  }

  getComentarios() {
    this.ComentarioServ.obtenerComentarios().subscribe({
      next: (data) => {
        this.ListComentarios = data;
      },
      error: (error) => {
        console.error('Error al obtener los comentarios:', error);
      }
    });
  }

  eliminarComentario(id: any) {
    this.ComentarioServ.eliminarComentario(id).subscribe({
      next: (data) => {
        console.log('Comentario eliminado:', data);
        this.getComentarios();
      },
      error: (error) => {
        console.error('Error al eliminar el comentario:', error);
      }
    });
  }
}
