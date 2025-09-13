import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarComentario } from './agregar-editar-comentario';

describe('AgregarEditarComentario', () => {
  let component: AgregarEditarComentario;
  let fixture: ComponentFixture<AgregarEditarComentario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarComentario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarComentario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
