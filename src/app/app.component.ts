import { Component } from '@angular/core';
import { Rocket } from './rocket';

const ROCKETS: Rocket[] = [
  { name: 'Rocket1', task: 0, isSabotaged: false },
  { name: 'Rocket2', task: 0, isSabotaged: false },
  { name: 'Rocket3', task: 0, isSabotaged: false },
  { name: 'Rocket4', task: 0, isSabotaged: false },
  { name: 'Rocket5', task: 0, isSabotaged: false },
  { name: 'Rocket6', task: 0, isSabotaged: false },
  { name: 'Rocket7', task: 0, isSabotaged: false },
  { name: 'Rocket8', task: 0, isSabotaged: false },
  { name: 'Rocket9', task: 0, isSabotaged: false },
];

@Component({
  selector: 'my-app',
  template: `
    <div class="rockets-board">
      <div class="col-md-1">
        <img src="assets/red_rocket.svg">
      </div>
      <div class="col-md-1">
        <img src="assets/blue_rocket.svg">
      </div>
    </div>

    <rocket-detail [rockets]="rockets"></rocket-detail>
  `,
})

export class AppComponent  {
  title = 'Rocket Racers';
  rockets = ROCKETS;
  // selectedRocket: Rocket;
 }
