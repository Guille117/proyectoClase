import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComentario } from './ver-comentario';

describe('VerComentario', () => {
  let component: VerComentario;
  let fixture: ComponentFixture<VerComentario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerComentario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerComentario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
