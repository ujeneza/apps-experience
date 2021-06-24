import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorsTabComponent } from './validation-errors-tab.component';

describe('ValidationErrorsTabComponent', () => {
  let component: ValidationErrorsTabComponent;
  let fixture: ComponentFixture<ValidationErrorsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationErrorsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
