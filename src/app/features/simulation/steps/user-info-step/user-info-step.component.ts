import { CommonModule } from '@angular/common';
import { Component, Injector, Signal, effect, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContainerPanelComponent } from '@core/components';
import { SimulationService } from '@features/simulation/simulation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Person } from '@core/models';

@Component({
  selector: 'app-user-info-step',
  templateUrl: './user-info-step.component.html',
  styleUrls: ['./user-info-step.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ContainerPanelComponent],
})
export default class UserInfoStepComponent {
  personalForm!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private injector = inject(Injector);
  private router = inject(Router);
  private simulationService = inject(SimulationService);

  formValue: Signal<Person>;

  constructor() {
    this.personalForm = this.formBuilder.group({
      gender: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required /*Validators.pattern(/(7|8|9)\d{9}/)*/],
    });

    // to retrteive the last value state if there is one
    // it's useful on navigation back to keep data
    effect(
      () => {
        const storedValue = this.simulationService.personalInfo();
        if (storedValue)
          this.personalForm.patchValue(storedValue, { emitEvent: false });
      },
      { allowSignalWrites: true }
    );

    this.formValue = toSignal(this.personalForm.valueChanges);

    // once the form is complete and valid
    // update the state
    effect(
      () => {
        const formValue = this.formValue();
        if (!this.personalForm.invalid) {
          this.simulationService.updatePersonalInfo(formValue);
        }
      },
      { allowSignalWrites: true }
    );
  }

  onSubmit() {
    if (this.personalForm.invalid) {
      return;
    }
    this.router.navigate(['/simulation/project-info']);
  }
}
