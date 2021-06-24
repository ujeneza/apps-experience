import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalMovementUnitComponent } from './metal-movement-unit.component';

describe('ClosingComponent', () => {
  let component: MetalMovementUnitComponent;
  let fixture: ComponentFixture<MetalMovementUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalMovementUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalMovementUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
