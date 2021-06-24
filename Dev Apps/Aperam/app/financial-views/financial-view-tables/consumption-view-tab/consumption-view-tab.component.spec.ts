import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionViewTabComponent } from './consumption-view-tab.component';

describe('ConsumptionViewTabComponent', () => {
  let component: ConsumptionViewTabComponent;
  let fixture: ComponentFixture<ConsumptionViewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionViewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionViewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
