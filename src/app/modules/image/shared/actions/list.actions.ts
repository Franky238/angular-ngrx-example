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

export const LikeAction = createAction(
  '[Image.List] LIKE',
  props<{id: number}>(),
);
export const LikeSuccessAction = createAction(
  '[Image.List] LIKE_SUCCESS',
  props<{image: ImageEntity}>(),
);
export const LikeFailureAction = createAction(
  '[Image.List] LIKE_FAILURE',
  props<{err: any}>(),
);

export const UnlikeAction = createAction(
  '[Image.List] UNLIKE',
  props<{id: number}>(),
);
export const UnlikeSuccessAction = createAction(
  '[Image.List] UNLIKE_SUCCESS',
  props<{image: ImageEntity}>(),
);
export const UnlikeFailureAction = createAction(
  '[Image.List] UNLIKE_FAILURE',
  props<{err: any}>(),
);
