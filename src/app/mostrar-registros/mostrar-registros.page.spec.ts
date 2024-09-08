import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarRegistrosPage } from './mostrar-registros.page';

describe('MostrarRegistrosPage', () => {
  let component: MostrarRegistrosPage;
  let fixture: ComponentFixture<MostrarRegistrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarRegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
