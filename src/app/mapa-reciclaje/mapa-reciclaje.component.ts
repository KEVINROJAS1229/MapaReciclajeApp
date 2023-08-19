import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PuntosReciclajeService } from '../puntos-reciclaje.service';

@Component({
  selector: 'app-mapa-reciclaje',
  templateUrl: './mapa-reciclaje.component.html',
  styleUrls: ['./mapa-reciclaje.component.css']
})
export class MapaReciclajeComponent implements OnInit {
  private map!: L.Map;
  private puntosReciclaje: any[] = [];

  constructor(private puntosReciclajeService: PuntosReciclajeService) {}

  ngOnInit(): void {
    this.initializeMap();
    this.loadPuntosReciclaje();
  }

  private initializeMap(): void {
    this.map = L.map('map').setView([4.609710, -74.081750], 16); // Aumenta el valor de zoom
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  private loadPuntosReciclaje(): void {
    this.puntosReciclajeService.getPuntosReciclaje().subscribe(data => {
      this.puntosReciclaje = data;

      this.puntosReciclaje.forEach(punto => {
        const marker = L.marker([punto.latitud, punto.longitud]).addTo(this.map);
        marker.bindPopup(
          `<h2>${punto.nombre}</h2>
           <p>Teléfono: ${punto.telefono}</p>
           <p>Horarios: ${punto.horarios}</p>
           <p>Dirección: ${punto.direccion}</p>`
        );
      });
    });
  }
}
