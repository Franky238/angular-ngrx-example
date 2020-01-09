import {createAction, props} from '@ngrx/store';
import {ImageEntity, ImageRequest} from '../../../../entities/image.entity';

export const CreateImageAction = createAction(
  '[Image.Form] CREATE_IMAGE',
  props<{ request: ImageRequest }>(),
);
export const CreateImageSuccessAction = createAction(
  '[Image.Form] CREATE_IMAGE_SUCCESS',
  props<{ image: ImageEntity }>(),
);
export const CreateImageFailureAction = createAction(
  '[Image.Form] CREATE_IMAGE_FAILURE',
  props<{ err: any }>(),
);

export const EditImageAction = createAction(
  '[Image.Form] EDIT_IMAGE',
  props<{ id: number, request: ImageRequest }>(),
);
export const EditImageSuccessAction = createAction(
  '[Image.Form] EDIT_IMAGE_SUCCESS',
  props<{ image: ImageEntity }>(),
);
export const EditImageFailureAction = createAction(
  '[Image.Form] EDIT_IMAGE_FAILURE',
  props<{ err: any }>(),
);


export const FetchImageAction = createAction(
  '[Image.Form] FETCH_IMAGE',
  props<{ id: number }>(),
);
export const FetchImageSuccessAction = createAction(
  '[Image.Form] FETCH_IMAGE_SUCCESS',
  props<{ image: ImageEntity }>(),
);
export const FetchImageFailureAction = createAction(
  '[Image.Form] FETCH_IMAGE_FAILURE',
  props<{ err: any }>(),
);
