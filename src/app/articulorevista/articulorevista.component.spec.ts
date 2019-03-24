import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulorevistaComponent } from './articulorevista.component';

describe('ArticulorevistaComponent', () => {
  let component: ArticulorevistaComponent;
  let fixture: ComponentFixture<ArticulorevistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulorevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulorevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
