import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(4000)).toPromise();
  }

  getDish(id: string): Promise<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id)) [0]).pipe(delay(4000)).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return of(DISHES.filter((dish) => dish.featured) [0]).pipe(delay(4000)).toPromise();    
  }
}
