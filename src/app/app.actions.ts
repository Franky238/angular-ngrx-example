import {NavigationExtras} from '@angular/router';
import {createAction, props} from '@ngrx/store';

export const RouterGoAction = createAction(
  '[APP] ROUTER_GO',
  props<{ commands: any[], extras?: NavigationExtras }>(),
);
