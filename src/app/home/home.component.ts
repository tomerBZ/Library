import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddBookDialogComponent } from '../shared/components/add-book-dialog/add-book-dialog.component';
import { FirebaseService } from '../shared/services/firebase/firebase.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DeletePromptDialogComponent } from '../shared/components/delete-prompt-dialog/delete-prompt-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query('app-book, mat-card', style({opacity: 0, transform: 'translateY(40px)'}), {optional: true}),
        query('app-book, mat-card', stagger('300ms', [
          animate('300ms .47s ease-out', style({opacity: 1, transform: 'translateY(0)'})),
        ]), {optional: true}),
        query('app-book, mat-card', [
          animate(1000, style('*'))
        ], {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  books: any;
  error: boolean;
  loading: boolean;
  booksFlag: boolean;
  searchText: string;
  searchForm: FormGroup;
  constructor(public dialog: MatDialog, private _firebase: FirebaseService, private builder: FormBuilder) {
    this.error = false;
    this.loading = true;
    this.booksFlag = false;
  }


  ngOnInit() {
    this.books = this._firebase.books;
    this.buildForm();
    this._firebase.books.subscribe(data => {
        if (data.length > 0) {
          this.booksFlag = true;
          this.loading = false;
        } else {
          // empty collation
          this.booksFlag = false;
          this.loading = false;
        }
      },
      error => {
        this.error = true;
      },
      () => {
        this.loading = false;
      });
  }

  delete(event) {
    this.openDialog('delete', event);
  }

  editBook(event) {
    this.openDialog('book', event);
  }

  openDialog(dialogName: string, data?: any): void {
    if (dialogName === 'delete') {
      const dialogRef = this.dialog.open(DeletePromptDialogComponent, {
        width: '100%',
        maxWidth: '500px',
        data: {data}
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    } else {
      const dialogRef = this.dialog.open(AddBookDialogComponent, {
        width: '100%',
        maxWidth: '500px',
        data: {data}
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  }
  buildForm(): void {
    this.searchForm = this.builder.group({
      'search': [null, []],
    });
    this.searchForm.get('search').valueChanges.subscribe(searchTerm => {
      this.searchText = searchTerm;
    });
  }
}
