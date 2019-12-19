import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      children: [
        {
          path: 'images',
          loadChildren: () => import('./modules/image/image.module').then(module => module.ImageModule),
        },
      ],
    },
    {path: '', redirectTo: '/images', pathMatch: 'full'},
  ], {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
