import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaScssComponent } from './galeria-scss.component';

describe('GaleriaScssComponent', () => {
  let component: GaleriaScssComponent;
  let fixture: ComponentFixture<GaleriaScssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaScssComponent]
    });
    fixture = TestBed.createComponent(GaleriaScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
