import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return of(LEADERS).pipe(delay(4000)).toPromise();
  }

  getLeader(id: string): Promise<Leader> {
    return of(LEADERS.filter((lead) => (lead.id === id)) [0]).pipe(delay(4000)).toPromise();
  }

  getFeaturedLeader(): Promise<Leader> {
    return of(LEADERS.filter((lead) => lead.featured) [0]).pipe(delay(4000)).toPromise();
  }

}