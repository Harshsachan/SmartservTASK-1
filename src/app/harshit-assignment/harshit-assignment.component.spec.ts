import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarshitAssignmentComponent } from './harshit-assignment.component';

describe('HarshitAssignmentComponent', () => {
  let component: HarshitAssignmentComponent;
  let fixture: ComponentFixture<HarshitAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarshitAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarshitAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
