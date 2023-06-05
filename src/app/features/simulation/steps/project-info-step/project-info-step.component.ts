import { Component, inject, effect, Signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerPanelComponent } from '@core/components';
import { SimulationService } from '@features/simulation/simulation.service';
import { Project } from '@core/models';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-info-step',
  templateUrl: './project-info-step.component.html',
  styleUrls: ['./project-info-step.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ContainerPanelComponent],
})
export default class ProjectInfoStepComponent {
  projectForm!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private simulationService = inject(SimulationService);
  private router = inject(Router);
  formValue: Signal<Project>;

  constructor() {
    this.projectForm = this.formBuilder.group({
      ownership: ['', Validators.required],
      peopleNumber: ['', Validators.required],
      income: [
        '',
        [Validators.required, Validators.min(10_000), Validators.max(100_000)],
      ],
      surface: ['', Validators.required],
    });

    // to retrteive the last value state if there is one
    // it's useful on navigation back to keep data
    effect(
      () => {
        const storedValue = this.simulationService.projectInfo();
        if (storedValue)
          this.projectForm.patchValue(storedValue, { emitEvent: false });
      },
      { allowSignalWrites: true }
    );

    this.formValue = toSignal(this.projectForm.valueChanges);

    // once the form is complete and valid
    // update the state
    effect(
      () => {
        const formValue = this.formValue();
        if (!this.projectForm.invalid) {
          this.simulationService.updateProjectInfo(formValue);
        }
      },
      { allowSignalWrites: true }
    );
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      return;
    }
    this.router.navigate(['/simulation/result']);
  }
}
