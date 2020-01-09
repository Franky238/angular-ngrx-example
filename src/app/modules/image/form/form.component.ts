import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormUtils, FormValidators} from '../../../shared/utils/form.utils';
import {Store} from '@ngrx/store';
import {State} from '../shared/reducers/form.reducer';
import {CreateImageAction} from '../shared/actions/form.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private store$: Store<State>
  ) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      subtitle: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required, FormValidators.url()]),
    });
  }

  ngOnInit() {
  }

  public submitForm() {
    FormUtils.updateFormValidity(this.form);

    if (this.form.valid) {
      const formValues = this.form.getRawValue();

      this.store$.dispatch(CreateImageAction({
        request: {
          title: formValues.title,
          subtitle: formValues.subtitle,
          url: formValues.url,
        }
      }));
    }
  }

}
