import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {ImageRoutingModule} from './image-routing.module';
import * as imageReducers from './shared';
import {EffectsModule} from '@ngrx/effects';
import {ListEffects} from './shared/effects/list.effects';
import {DetailComponent} from './detail/detail.component';
import {DetailEffects} from './shared/effects/detail.effects';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(imageReducers.featureKey, imageReducers.reducers),
    EffectsModule.forFeature([
      ListEffects,
      DetailEffects,
    ]),
    ImageRoutingModule,
  ]
})
export class ImageModule {
}
