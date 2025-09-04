import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComentario } from './list-comentario';

describe('ListComentario', () => {
  let component: ListComentario;
  let fixture: ComponentFixture<ListComentario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComentario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComentario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
