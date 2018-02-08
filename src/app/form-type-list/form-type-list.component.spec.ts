import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeListComponent } from './form-type-list.component';

describe('FormTypeListComponent', () => {
  let component: FormTypeListComponent;
  let fixture: ComponentFixture<FormTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
