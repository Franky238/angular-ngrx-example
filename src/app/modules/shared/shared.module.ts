import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
  ],
  providers: [],
  exports: [
    ...MODULES,
  ],
})
export class SharedModule {
}
