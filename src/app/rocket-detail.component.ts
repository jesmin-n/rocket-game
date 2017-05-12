import { Component, Input } from '@angular/core';
import { Rocket } from './rocket';

@Component({
  selector: 'rocket-detail',
  template: `
    <div class="row"  *ngFor="let rocket of rockets">
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-btn">
            <button (click)="onSabotaged(rocket)" class="btn btn-success" type="button">Sabotage!</button>
          </span>
          <input type="text" class="form-control" [(ngModel)]="rocket.name" placeholder="Rocket 1">
        </div>
      </div><!-- /.col-md-3 -->

      <div class="col-md-3">
        <input [(ngModel)]="rocket.task" (click)="onTaskChange(rocket)" type="number" id="tasksFinished" min=0 max=9 placeholder=0 class="form-control">
      </div><!-- /.col-md-3 -->
    </div><!-- /.row -->
  `,
})

export class RocketDetailComponent {
  @Input() rockets: Rocket;
  onSabotaged(rocket: Rocket): void {
    console.log(rocket.name + "is being sabotaged!");
    rocket.isSabotaged = true;
  }

  onTaskChange(rocket: Rocket): void {
    console.log(rocket.name + "progressed!");
  }
}
