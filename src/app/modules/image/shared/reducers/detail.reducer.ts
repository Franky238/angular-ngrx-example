import {ImageEntity} from '../../../../entities/image.entity';
import {Action, createReducer, on} from '@ngrx/store';
import {FetchImageFailureAction, FetchImageSuccessAction} from '../actions/detail.actions';

export interface State {
  image: ImageEntity | null;
}

const initialState: State = {
  image: null,
};

const imageReducer = createReducer(
  initialState,
  on(FetchImageSuccessAction, (state, {image}) => ({...state, image})),
  on(FetchImageFailureAction, state => ({...state, image: null})),
);

export function reducer(state: State | undefined, action: Action) {
  return imageReducer(state, action);
}

export const selectImage = (state: State) => state.image;
