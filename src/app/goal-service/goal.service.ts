import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals;
  }
  constructor() { }
}
