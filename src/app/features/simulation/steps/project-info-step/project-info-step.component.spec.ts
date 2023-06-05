import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoStepComponent } from './project-info-step.component';

describe('ProjectInfoStepComponent', () => {
  let component: ProjectInfoStepComponent;
  let fixture: ComponentFixture<ProjectInfoStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectInfoStepComponent]
    });
    fixture = TestBed.createComponent(ProjectInfoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
