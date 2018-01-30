import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation/validation.service';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss'],
})
export class AddBookFormComponent implements OnInit, OnChanges {
  book: any;
  today: any;
  formErrors: any;
  addBookForm: FormGroup;
  buttonValue: string;
  @Input() data: any;
  @Output() close = new EventEmitter();

  constructor(private builder: FormBuilder,
              private _validation: ValidationService,
              private _firebase: FirebaseService) {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();
    const yyyy = today.getFullYear();
    this.today = new Date(yyyy, mm, dd);
    this.buttonValue = 'Add';
  }

  ngOnInit() {
    // Get validation errors
    this.formErrors = this._validation.formErrors;
  }

  ngOnChanges(changes: SimpleChanges) {
    // Build Form && get data if exist
    this.buildForm();
    if (changes.data.currentValue) {
      this.buttonValue = 'Edit';
      this.addBookForm.setValue(this.data);
    }
  }

  closeMe() {
    this.close.emit();
  }

  formSubmit(form: FormGroup) {
    if (form.status === 'VALID' && this.addBookForm.touched) {
      this._firebase.addBook(form.value);
      this.close.emit();
    }
  }

  buildForm(): void {
    this.addBookForm = this.builder.group({
      'name': [null, [Validators.required, Validators.pattern('^[a-zA-Z !\'-.]*$')]],
      'author': [null, [Validators.required, Validators.pattern('^[a-zA-Z !\'-.]*$')]],
      'image': [null, [Validators.required]],
      'date': [this.today, [Validators.required]],
      'description': [null, [Validators.required, Validators.maxLength(256)]]
    });
    this.addBookForm.valueChanges.subscribe(data => this._validation.onValueChanged(data, this.addBookForm, 'addBook'));
    this._validation.onValueChanged(null, this.addBookForm, 'addBook');
  }
}
