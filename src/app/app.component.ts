import { Component, OnInit } from '@angular/core';
import { Rocket } from './rocket';
import { RocketService } from './rocket.service';

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
  providers: [RocketService]
})

export class AppComponent implements OnInit  {
  title = 'Rocket Racers';
  rockets : Rocket[];
  // selectedRocket: Rocket;
  constructor(private rocketService: RocketService) {}
  getRockets(): void {
    this.rocketService.getRockets().then(rockets => this.rockets = rockets);
  }
  ngOnInit(): void {
    this.getRockets();
  }
 }
