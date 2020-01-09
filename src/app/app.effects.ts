import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {RouterGoAction} from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
  ) {
  }

  public routerGo$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouterGoAction),
      tap(({commands, extras}) => {
        this.router.navigate(commands, extras);
      }),
    ),
    {dispatch: false},
  );

}
