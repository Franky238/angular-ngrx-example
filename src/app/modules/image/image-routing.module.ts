import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {LayoutType} from '../../shared/enums/layout.eum';
import {FormComponent} from './form/form.component';
import {FormMode} from '../../shared/enums/form-mode';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'list',
      component: ListComponent,
    }, {
      path: 'create',
      component: FormComponent,
      data: {
        layout: LayoutType.NORMAL,
        formMode: FormMode.CREATE,
      }
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
