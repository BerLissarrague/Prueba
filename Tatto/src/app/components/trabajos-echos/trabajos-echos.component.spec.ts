import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosEchosComponent } from './trabajos-echos.component';

describe('TrabajosEchosComponent', () => {
  let component: TrabajosEchosComponent;
  let fixture: ComponentFixture<TrabajosEchosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosEchosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajosEchosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
