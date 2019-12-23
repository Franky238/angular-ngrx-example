import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {LayoutType} from '../../shared/enums/layout.eum';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'list',
      component: ListComponent,
    }, {
      path: ':id',
      component: DetailComponent,
      data: {
        layout: LayoutType.FLUID,
      }
    }, {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    }]),
  ],
  exports: [RouterModule],
})
export class ImageRoutingModule {
}
