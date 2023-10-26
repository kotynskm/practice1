import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { incrementCount, decrementCount } from './store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    // extract the data from the store using it's key
    this.counter$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(incrementCount());
  }

  decrement() {
    this.store.dispatch(decrementCount());
  }
}
