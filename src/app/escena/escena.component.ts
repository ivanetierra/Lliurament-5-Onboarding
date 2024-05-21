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

}
