import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPublicacionComponent } from './new-publicacion.component';

describe('NewPublicacionComponent', () => {
  let component: NewPublicacionComponent;
  let fixture: ComponentFixture<NewPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
