import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialViewsComponent } from './financial-views.component';

describe('FinancialViewsComponent', () => {
  let component: FinancialViewsComponent;
  let fixture: ComponentFixture<FinancialViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
