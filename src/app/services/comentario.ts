import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = environment.apiUrl + '/Comentario/'; 

  constructor(private readonly http: HttpClient) { }

  obtenerComentarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerComentario(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  crearComentario(comentario: any): Observable<any> {
    return this.http.post(this.apiUrl, comentario);
  }

  actualizarComentario(id: number, comentario: any): Observable<any> {
    return this.http.put(this.apiUrl + id, comentario);
  }

    eliminarComentario(id: number): Observable<any> {
      return this.http.delete(this.apiUrl + id);
  }
}
