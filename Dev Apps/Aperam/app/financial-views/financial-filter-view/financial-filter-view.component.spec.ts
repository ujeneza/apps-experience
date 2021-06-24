import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialFilterViewComponent } from './financial-filter-view.component';

describe('FinancialFilterViewComponent', () => {
  let component: FinancialFilterViewComponent;
  let fixture: ComponentFixture<FinancialFilterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialFilterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialFilterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
