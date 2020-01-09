import {ImageService} from '../../../../services/image.service';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  CreateImageAction,
  CreateImageFailureAction,
  CreateImageSuccessAction,
  EditImageAction,
  EditImageFailureAction,
  EditImageSuccessAction,
  FetchImageAction,
  FetchImageFailureAction,
  FetchImageSuccessAction
} from '../actions/form.actions';
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
        RouterGoAction({commands: ['images']}),
      ])
    ),
  );

  public editImage$ = createEffect(
    () => this.actions$.pipe(
      ofType(EditImageAction),
      exhaustMap(({id, request}) => {
        return this.imageService.updateImage(id, request).pipe(
          map(image => EditImageSuccessAction({image})),
          catchError(err => of(EditImageFailureAction({err})))
        );
      }),
    ),
  );

  public editImageSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(EditImageSuccessAction),
      switchMap(({image}) => [
        RouterGoAction({commands: ['images', image.id]}),
      ])
    ),
  );

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
