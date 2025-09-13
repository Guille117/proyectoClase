import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Comentario } from '../../interfaces/comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './agregar-editar-comentario.html',
  styleUrl: './agregar-editar-comentario.scss'
})
export class AgregarEditarComentario {
  agregarComentario: FormGroup;

  constructor(private readonly fb: FormBuilder){
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  agregar(){
    console.log(this.agregarComentario.value);
    const nuevoComentario: Comentario = {
      titulo: this.agregarComentario.value?.titulo,
      creador: this.agregarComentario.value?.creador,
      texto: this.agregarComentario.value?.texto,
      fechaCreacion: new Date()
  };
  console.log(nuevoComentario);
}
}
