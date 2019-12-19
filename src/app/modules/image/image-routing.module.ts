import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'list',
      component: ListComponent,
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
