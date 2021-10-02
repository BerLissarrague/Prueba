import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionDeServiciosComponent } from './descripcion-de-servicios.component';

describe('DescripcionDeServiciosComponent', () => {
  let component: DescripcionDeServiciosComponent;
  let fixture: ComponentFixture<DescripcionDeServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionDeServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionDeServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
