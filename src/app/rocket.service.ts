import { Injectable } from '@angular/core';

import { Rocket } from './rocket';
import { ROCKETS } from './mock-rockets';

@Injectable()
export class RocketService {
  getRockets(): Promise<Rocket[]> {
    return Promise.resolve(ROCKETS);
  }
}
