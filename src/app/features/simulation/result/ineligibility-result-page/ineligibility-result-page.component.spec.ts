import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IneligibilityResultPageComponent } from './ineligibility-result-page.component';

describe('IneligibilityResultPageComponent', () => {
  let component: IneligibilityResultPageComponent;
  let fixture: ComponentFixture<IneligibilityResultPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IneligibilityResultPageComponent]
    });
    fixture = TestBed.createComponent(IneligibilityResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
