import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContainerPanelComponent } from '@core/components';
import { SimulationService } from '@features/simulation/simulation.service';

@Component({
  selector: 'app-eligibility-result-page',
  templateUrl: './eligibility-result-page.component.html',
  styleUrls: ['./eligibility-result-page.component.scss'],
  standalone: true,
  imports: [CommonModule, ContainerPanelComponent],
})
export default class EligibilityResultPageComponent {
  private simulationService = inject(SimulationService);
  personalInfo = this.simulationService.personalInfo();
  isEligible = this.simulationService.isEligibale();
  projectCost = this.simulationService.cost();
}
