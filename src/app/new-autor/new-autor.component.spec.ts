import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutorComponent } from './new-autor.component';

describe('NewAutorComponent', () => {
  let component: NewAutorComponent;
  let fixture: ComponentFixture<NewAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
