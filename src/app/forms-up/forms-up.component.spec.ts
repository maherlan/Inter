import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUpComponent } from './forms-up.component';

describe('FormsUpComponent', () => {
  let component: FormsUpComponent;
  let fixture: ComponentFixture<FormsUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
