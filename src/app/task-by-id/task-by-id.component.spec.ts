import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByIdComponent } from './task-by-id.component';

describe('TaskByIdComponent', () => {
  let component: TaskByIdComponent;
  let fixture: ComponentFixture<TaskByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
