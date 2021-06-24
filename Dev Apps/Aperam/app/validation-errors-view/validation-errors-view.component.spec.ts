import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorsViewComponent } from './validation-errors-view.component';

describe('ValidationErrorsViewComponent', () => {
  let component: ValidationErrorsViewComponent;
  let fixture: ComponentFixture<ValidationErrorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationErrorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
