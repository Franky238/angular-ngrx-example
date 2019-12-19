import {ImageEntity} from '../../../../entities/image.entity';
import {Action, createReducer, on} from '@ngrx/store';
import {FetchImagesFailureAction, FetchImagesSuccessAction} from '../actions/list.actions';

export interface State {
  images: ImageEntity[];
}

const initialState: State = {
  images: [],
};

const imageReducer = createReducer(
  initialState,
  on(FetchImagesSuccessAction, (state, {images}) => ({...state, images})),
  on(FetchImagesFailureAction, state => ({...state, images: []})),
);

export function reducer(state: State | undefined, action: Action) {
  return imageReducer(state, action);
}

export const selectImages = (state: State) => state.images;
