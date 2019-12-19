import {ImageService} from '../../../../services/image.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FetchImagesAction, FetchImagesFailureAction, FetchImagesSuccessAction} from '../actions/list.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ListEffects {
  constructor(
    private imageService: ImageService,
    private actions$: Actions,
  ) {
  }

  public fetchImageList$ = createEffect(
    () => this.actions$.pipe(
      ofType(FetchImagesAction),
      switchMap(() => {
        return this.imageService.getImages().pipe(
          map(images => FetchImagesSuccessAction({images})),
          catchError(err => of(FetchImagesFailureAction({err})))
        );
      }),
    ),
  );
}
