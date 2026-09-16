import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState, selectCounter } from './store/counter.selectors';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

   counter$!: Observable<number>;
   constructor(private store:Store<AppState>){
       this.counter$ = this.store.select(selectCounter);
   }

   inc(){
     this.store.dispatch(increment());
   }

   dec(){
     this.store.dispatch(decrement());
   }

   resetCount(){
      this.store.dispatch(reset());
   }
}
