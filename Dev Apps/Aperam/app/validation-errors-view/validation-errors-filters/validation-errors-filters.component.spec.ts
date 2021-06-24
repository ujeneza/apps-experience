import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorsFiltersComponent } from './validation-errors-filters.component';

describe('ValidationErrorsFiltersComponent', () => {
  let component: ValidationErrorsFiltersComponent;
  let fixture: ComponentFixture<ValidationErrorsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationErrorsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
