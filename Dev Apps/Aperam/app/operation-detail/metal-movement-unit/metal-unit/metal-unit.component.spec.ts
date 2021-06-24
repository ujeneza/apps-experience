import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalUnitComponent } from './metal-unit.component';

describe('ClosingComponent', () => {
  let component: MetalUnitComponent;
  let fixture: ComponentFixture<MetalUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
