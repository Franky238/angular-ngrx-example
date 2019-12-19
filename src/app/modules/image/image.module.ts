import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {ImageRoutingModule} from './image-routing.module';
import * as imageReducers from './shared';
import {EffectsModule} from '@ngrx/effects';
import {ListEffects} from './shared/effects/list.effects';



@NgModule({
  declarations: [ListComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature(imageReducers.featureKey, imageReducers.reducers),
    EffectsModule.forFeature([
      ListEffects,
    ]),
    ImageRoutingModule,
  ]
})
export class ImageModule { }
