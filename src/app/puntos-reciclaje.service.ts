import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntosReciclajeService {
  private puntosUrl = 'assets/puntos-reciclaje.json'; 

  constructor(private http: HttpClient) {}

  getPuntosReciclaje(): Observable<any[]> {
    return this.http.get<any[]>(this.puntosUrl);
  }
}
