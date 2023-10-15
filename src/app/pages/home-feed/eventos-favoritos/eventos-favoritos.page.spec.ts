import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosFavoritosPage } from './eventos-favoritos.page';

describe('EventosFavoritosPage', () => {
  let component: EventosFavoritosPage;
  let fixture: ComponentFixture<EventosFavoritosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventosFavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
