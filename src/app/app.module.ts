import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { MapaReciclajeComponent } from './mapa-reciclaje/mapa-reciclaje.component';
import { PuntosReciclajeService } from './puntos-reciclaje.service';

@NgModule({
  declarations: [
    AppComponent,
    MapaReciclajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [PuntosReciclajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
