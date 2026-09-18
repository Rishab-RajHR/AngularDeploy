import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { userFeature } from './users/user.feature';
import { Store } from '@ngrx/store';
import { loadUsers } from './users/user.actions';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   users$! : Observable<any>;

   constructor(private store:Store) {
      this.users$ = this.store.select(
          userFeature.selectUserState
      );
   }

   load(){
      this.store.dispatch(loadUsers());
   }
}
