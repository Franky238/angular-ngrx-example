import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as imageListReducer from './reducers/list.reducer';

export const featureKey = 'images';

export interface ImageState {
  list: imageListReducer.State;
}

export const reducers: ActionReducerMap<ImageState> = {
  list: imageListReducer.reducer,
};

const selectFeature = createFeatureSelector(featureKey);
const selectList = createSelector(selectFeature, (state: ImageState) => state.list);

export const imageSelectors = {
  list: {
    images: createSelector(selectList, imageListReducer.selectImages),
  },
};
