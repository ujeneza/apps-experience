import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityViewTabComponent } from './activity-view-tab.component';

describe('ActivityViewTabComponent', () => {
  let component: ActivityViewTabComponent;
  let fixture: ComponentFixture<ActivityViewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityViewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityViewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
