import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormUtils, FormValidators} from '../../../shared/utils/form.utils';
import {select, Store} from '@ngrx/store';
import {State} from '../shared/reducers/form.reducer';
import {CreateImageAction, EditImageAction, FetchImageAction} from '../shared/actions/form.actions';
import {ActivatedRoute} from '@angular/router';
import {FormMode} from '../../../shared/enums/form-mode';
import {imageSelectors} from '../shared';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public selectedFormMode: FormMode;
  public FormMode = FormMode;

  constructor(
    private store$: Store<State>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      subtitle: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required, FormValidators.url()]),
    });
  }

  ngOnInit() {
    this.selectedFormMode = this.activatedRoute.snapshot.data.formMode;

    if (this.selectedFormMode === FormMode.EDIT) {
      this.store$.dispatch(FetchImageAction({id: this.activatedRoute.snapshot.params.id}));

      this.store$.pipe(
        select(imageSelectors.form.image)
      ).subscribe(image => {
        if (image) {
          this.form.patchValue({
            title: image.title,
            subtitle: image.subtitle,
            url: image.url,
          });

          this.form.get('url')!.disable();
        }
      });
    }
  }

  public submitForm() {
    FormUtils.updateFormValidity(this.form);

    if (this.form.valid) {
      const formValues = this.form.getRawValue();

      if (this.selectedFormMode === FormMode.CREATE) {
        this.store$.dispatch(CreateImageAction({
          request: {
            title: formValues.title,
            subtitle: formValues.subtitle,
            url: formValues.url,
          }
        }));
      } else {
        this.store$.dispatch(EditImageAction({
          id: parseInt(this.activatedRoute.snapshot.params.id, 10),
          request: {
            title: formValues.title,
            subtitle: formValues.subtitle,
            url: formValues.url,
          }
        }));
      }
    }
  }

}
