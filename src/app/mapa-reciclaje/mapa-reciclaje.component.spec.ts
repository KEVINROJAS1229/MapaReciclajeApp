import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaReciclajeComponent } from './mapa-reciclaje.component';

describe('MapaReciclajeComponent', () => {
  let component: MapaReciclajeComponent;
  let fixture: ComponentFixture<MapaReciclajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaReciclajeComponent]
    });
    fixture = TestBed.createComponent(MapaReciclajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
