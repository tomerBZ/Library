import { Component, NgZone, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ValidationService} from '../shared/services/validation/validation.service';
import {FirebaseService} from '../shared/services/firebase/firebase.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnChanges {
  book: any;
  @Input() id: string;
  @Output() data = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private builder: FormBuilder,
              private _validation: ValidationService,
              private _firebase: FirebaseService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.id.currentValue) {
      this._firebase.getBook(this.id).subscribe(book => {
        this.book = book;
      });
    }
  }
  deleteBook() {
    this.delete.emit(this.book.name);
  }
  editBook() {
    this.data.emit(this.book);
  }
}
