import { Component, Inject, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-delete-prompt-dialog',
  templateUrl: './delete-prompt-dialog.component.html',
  styleUrls: ['./delete-prompt-dialog.component.scss']
})
export class DeletePromptDialogComponent implements OnInit {
  private name: string;
  constructor(private _firebase: FirebaseService,
              public dialogRef: MatDialogRef<AddBookDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.name = this.data.data;
  }

  delete() {
    this._firebase.deleteBook(this.name);
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
