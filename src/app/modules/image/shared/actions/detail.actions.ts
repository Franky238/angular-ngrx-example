import {createAction, props} from '@ngrx/store';
import {ImageEntity} from '../../../../entities/image.entity';

export const FetchImageAction = createAction(
  '[Image.Detail] FETCH_IMAGE',
  props<{ id: number }>(),
);
export const FetchImageSuccessAction = createAction(
  '[Image.Detail] FETCH_IMAGE_SUCCESS',
  props<{ image: ImageEntity }>(),
);
export const FetchImageFailureAction = createAction(
  '[Image.Detail] FETCH_IMAGE_FAILURE',
  props<{ err: any }>(),
);
