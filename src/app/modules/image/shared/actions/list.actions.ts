import {createAction, props} from '@ngrx/store';
import {ImageEntity} from '../../../../entities/image.entity';

export const FetchImagesAction = createAction('[Image.List] FETCH_IMAGES');
export const FetchImagesSuccessAction = createAction(
  '[Image.List] FETCH_IMAGES_SUCCESS',
  props<{images: ImageEntity[]}>(),
);
export const FetchImagesFailureAction = createAction(
  '[Image.List] FETCH_IMAGES_FAILURE',
  props<{ err: any }>(),
);

