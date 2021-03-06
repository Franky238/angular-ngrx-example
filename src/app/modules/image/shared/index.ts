import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as imageListReducer from './reducers/list.reducer';
import * as imageDetailReducer from './reducers/detail.reducer';
import * as imageFormReducer from './reducers/form.reducer';

export const featureKey = 'images';

export interface ImageState {
  list: imageListReducer.State;
  detail: imageDetailReducer.State;
  form: imageFormReducer.State;
}

export const reducers: ActionReducerMap<ImageState> = {
  list: imageListReducer.reducer,
  detail: imageDetailReducer.reducer,
  form: imageFormReducer.reducer,
};

const selectFeature = createFeatureSelector(featureKey);
const selectList = createSelector(selectFeature, (state: ImageState) => state.list);
const selectDetail = createSelector(selectFeature, (state: ImageState) => state.detail);
const selectForm = createSelector(selectFeature, (state: ImageState) => state.form);

export const imageSelectors = {
  list: {
    images: createSelector(selectList, imageListReducer.selectImages),
  },
  detail: {
    image: createSelector(selectDetail, imageDetailReducer.selectImage),
  },
  form: {
    image: createSelector(selectForm, imageFormReducer.selectImage),
  }
};
