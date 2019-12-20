import {ImageService} from '../../../../services/image.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  FetchImagesAction,
  FetchImagesFailureAction,
  FetchImagesSuccessAction,
  LikeAction,
  LikeFailureAction,
  LikeSuccessAction,
  UnlikeAction,
  UnlikeFailureAction,
  UnlikeSuccessAction
} from '../actions/list.actions';
import {catchError, concatMap, map, switchMap} from 'rxjs/operators';
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

  public likeImage$ = createEffect(
    () => this.actions$.pipe(
      ofType(LikeAction),
      concatMap(({id}) => {
        return this.imageService.likeImage(id).pipe(
          map(image => LikeSuccessAction({image})),
          catchError(err => of(LikeFailureAction({err}))),
        );
      }),
    ),
  );

  public unlikeImage$ = createEffect(
    () => this.actions$.pipe(
      ofType(UnlikeAction),
      concatMap(({id}) => {
        return this.imageService.unlikeImage(id).pipe(
          map(image => UnlikeSuccessAction({image})),
          catchError(err => of(UnlikeFailureAction({err})))
        );
      }),
    ),
  );
}
