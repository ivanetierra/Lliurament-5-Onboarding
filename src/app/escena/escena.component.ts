import { Component, Input } from '@angular/core';
import { IStep } from '../iStep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  @Input() steps: IStep[] = [];

  currentStep = 0;
  
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  selectStep(index: number) {
    this.currentStep = index;
  }

}
