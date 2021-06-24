import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalMouvemntTabComponent } from './metal-mouvemnt-tab.component';

describe('MetalMouvemntTabComponent', () => {
  let component: MetalMouvemntTabComponent;
  let fixture: ComponentFixture<MetalMouvemntTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalMouvemntTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalMouvemntTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
