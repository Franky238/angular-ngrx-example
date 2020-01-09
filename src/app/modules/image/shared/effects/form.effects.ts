import {ImageService} from '../../../../services/image.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {CreateImageAction, CreateImageFailureAction, CreateImageSuccessAction} from '../actions/form.actions';
import {RouterGoAction} from '../../../../app.actions';

@Injectable()
export class FormEffects {
  constructor(
    private imageService: ImageService,
    private actions$: Actions,
  ) {
  }

  public createImage$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateImageAction),
      exhaustMap(({request}) => {
        return this.imageService.createImage(request).pipe(
          map(image => CreateImageSuccessAction({image})),
          catchError(err => of(CreateImageFailureAction({err})))
        );
      }),
    ),
  );

  public createImageSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateImageSuccessAction),
      switchMap(() => [
        RouterGoAction({commands: ['/images']}),
      ])
    ),
  );
}
