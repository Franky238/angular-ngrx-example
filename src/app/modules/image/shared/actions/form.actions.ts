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
