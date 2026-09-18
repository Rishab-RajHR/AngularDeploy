import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "./user.service";
import { loadUsers, loadUsersFailure, loadUsersSuccess } from "./user.actions";
import { catchError, map, switchMap } from "rxjs";
import { of } from "rxjs";


@Injectable()
export class UserEffects{
    // Action stream
    private action$ = inject(Actions);
    // Api service
    private userService = inject(UserService);

    // Effect to load users
    loadUsers$ = createEffect(()=>
        this.action$.pipe(
            ofType(loadUsers),
            switchMap(()=>
               this.userService.getUsers().pipe(
                  map((users)=> loadUsersSuccess({ users })),
                  catchError((error)=>
                      of(loadUsersFailure({error: error.message}))),
               ),
            ),
        ),
    );
}
