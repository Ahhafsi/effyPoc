import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityResultPageComponent } from './eligibility-result-page.component';

describe('EligibilityResultPageComponent', () => {
  let component: EligibilityResultPageComponent;
  let fixture: ComponentFixture<EligibilityResultPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EligibilityResultPageComponent]
    });
    fixture = TestBed.createComponent(EligibilityResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
