import { Component, inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { formFeature } from './form/form.feature';
import { resetForm, updateFormField } from './form/form.actions';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // form$ : Observable<{ name: string; email: string }>;

  // constructor( private store: Store) {
  //     this.form$ = this.store.select(formFeature.selectFormState);
  // }

  private store = inject(Store);

  form$ = this.store.select(formFeature.selectFormState);

  updatedField(field: 'name' | 'email', value: string) {
     this.store.dispatch( updateFormField({ field, value }));
  }

  resetForm() {
     this.store.dispatch(resetForm())
  }
}
