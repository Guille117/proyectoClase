import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Comentario } from '../../interfaces/comentario';
import { ComentarioService } from '../../services/comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './agregar-editar-comentario.html',
  styleUrl: './agregar-editar-comentario.scss'
})
export class AgregarEditarComentario {
   agregarComentario: FormGroup;
  accion = 'Agregar';
  id = 0;
  comentario: any;

  constructor(private readonly fb: FormBuilder,
              private readonly comentarioService: ComentarioService,
              private readonly router: Router,
              private readonly aRoute: ActivatedRoute

  ) {
    this.id  = Number(this.aRoute.snapshot.params['id']);
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerComentario(this.id);
  }

  agregarEditar(){
    if (this.comentario != undefined) {
      this.editarComentario(this.id);
    }
    else {
      this.guardarComentario();
    }
  }

  guardarComentario(){
    const nuevoComentario: Comentario = {
      titulo: this.agregarComentario.value?.titulo,
      creador: this.agregarComentario.value?.creador,
      texto: this.agregarComentario.value?.texto,
      fechaCreacion: new Date()
    };
    this.comentarioService.crearComentario(nuevoComentario).subscribe({
      next: (data) => {
        console.log('Comentario agregado:', data);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al agregar el comentario:', error);
      }
    });
  }

  editarComentario(id: number) {
    const comentarioEditado: Comentario = {
      id: this.comentario.id,
      titulo: this.agregarComentario.value?.titulo,
      creador: this.agregarComentario.value?.creador,
      texto: this.agregarComentario.value?.texto,
      fechaCreacion: this.comentario.fechaCreacion
    };
    this.comentarioService.actualizarComentario(id, comentarioEditado).subscribe({
      next: (data) => {
        console.log('Comentario editado:', data);
        this.router.navigate(['ver/' + id]);
      },
      error: (error) => {
        console.error('Error al editar el comentario:', error);
      }
    });
  }

  obtenerComentario(id: number) {
  if (this.id > 0) {
      this.accion = 'Editar';
      this.comentarioService.obtenerComentario(this.id).subscribe({
        next: (data) => {
          this.comentario = data;
          this.agregarComentario.patchValue({
            titulo: this.comentario?.titulo,
            creador: this.comentario?.creador,
            texto: this.comentario?.texto
          });
        },
        error: (error) => {
          console.error('Error al obtener el comentario:', error);
        }
      });
    }
  }
}
