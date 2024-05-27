import { Component, Input } from '@angular/core';
import { IStep } from '../iStep';
import { trigger, state, transition, query, style, animate, group } from '@angular/animations';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('next', style({ transform: 'translateX(0)' })),
      state('previous', style({ transform: 'translateX(0)' })),
      transition('* => next', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => previous', [
        style({ transform: 'translateX(-100%)' }),
        animate('400ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class EscenaComponent {
  @Input() steps: IStep[] = [];
  
  state = 'void';
  currentStep = 0;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.state = 'next';
      this.currentStep++;
      setTimeout(() => this.state = 'void', 400);
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.state = 'previous';
      this.currentStep--;
      setTimeout(() => this.state = 'void', 400);
    }
  }

  selectStep(index: number) {
    this.state = index > this.currentStep ? 'next' : 'previous';
    this.currentStep = index;
    setTimeout(() => this.state = 'void', 400);
  }
}

