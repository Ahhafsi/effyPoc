import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container-panel',
  templateUrl: './container-panel.component.html',
  styleUrls: ['./container-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ContainerPanelComponent {
  @Input() title!: string;
  @Input() displayBackBtn = false;
}
