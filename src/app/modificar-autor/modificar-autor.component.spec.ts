import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAutorComponent } from './modificar-autor.component';

describe('ModificarAutorComponent', () => {
  let component: ModificarAutorComponent;
  let fixture: ComponentFixture<ModificarAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
