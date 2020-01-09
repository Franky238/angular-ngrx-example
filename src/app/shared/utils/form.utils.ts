import {FormGroup, Validators} from '@angular/forms';

export class FormUtils {
  public static updateFormValidity(formGroup: FormGroup) {
    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        formGroup.controls[key].markAsDirty();
        formGroup.controls[key].updateValueAndValidity();
      }
    }
  }
}

export class FormValidators {
  public static url() {
    return Validators.pattern('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$');
  }
}

