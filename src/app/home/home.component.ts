import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../iStep';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  steps: IStep[] = [];

  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }


}
