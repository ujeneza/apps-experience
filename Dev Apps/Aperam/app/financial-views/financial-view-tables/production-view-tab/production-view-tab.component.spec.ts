import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionViewTabComponent } from './production-view-tab.component';

describe('ProductionViewTabComponent', () => {
  let component: ProductionViewTabComponent;
  let fixture: ComponentFixture<ProductionViewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionViewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionViewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
