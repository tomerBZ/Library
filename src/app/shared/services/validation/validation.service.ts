import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValidationService {
  formErrors = {
    name: '',
    author: '',
    image: '',
    description: '',
  };
  validationMessages = {
    'addBook': {
      'name': {
        'required': 'You Most Enter Book Name.',
        'pattern': 'Book name can include alpha characters, hyphens, commas and dots.',
      },
      'author': {
        'required': 'You Must Enter Author Name',
        'pattern': 'Author name can include alpha characters, hyphens, commas and dots.',
      },
      'image': {
        'required': 'You Must Enter An Image URL',
      },
      'date': {
        'required': 'You Must Enter a date',
      },
      'description': {
        'required': 'You Must Enter A Book Description',
        'maxlength': 'No more than 256 characters',
      }
    }
  };

  constructor() {
  }

  /**
   * Listen to form value changes and check for matching error by field name
   * @param {string} data
   * @param {FormGroup} formToValidate
   * @param {string} formName
   */
  onValueChanged(data ?: string, formToValidate ?: FormGroup, formName ?: string) {
    if (!formToValidate) {
      return;
    }
    for (const field in this.formErrors) {
      if (this[field] !== 0) {
        this.formErrors[field] = '';
        const control = formToValidate.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[formName][field];
          console.log(this.validationMessages[formName][field]);
          console.log(messages);
          for (const key in control.errors) {
            if (this[field] !== 0) {
              if (control.errors.hasOwnProperty(key)) {
                console.log(key);
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }
  }
}
