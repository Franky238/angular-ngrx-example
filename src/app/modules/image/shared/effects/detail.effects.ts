import {ImageService} from '../../../../services/image.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FetchImageAction, FetchImageFailureAction, FetchImageSuccessAction} from '../actions/detail.actions';

@Injectable()
export class DetailEffects {
  constructor(
    private imageService: ImageService,
    private actions$: Actions,
  ) {
  }

  public fetchImage$ = createEffect(
    () => this.actions$.pipe(
      ofType(FetchImageAction),
      switchMap(({id}) => {
        return this.imageService.getImage(id).pipe(
          map(image => FetchImageSuccessAction({image})),
          catchError(err => of(FetchImageFailureAction({err})))
        );
      }),
    ),
  );
}
