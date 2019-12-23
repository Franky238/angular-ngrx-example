import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CardImageComponent} from './components/card-image/card-image.component';
import {RouterModule} from '@angular/router';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    CardImageComponent,
  ],
  imports: [
    ...MODULES,
  ],
  providers: [],
  exports: [
    ...MODULES,
    CardImageComponent,
  ],
})
export class SharedModule {
}
