import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   constructor(private store:Store){}

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
