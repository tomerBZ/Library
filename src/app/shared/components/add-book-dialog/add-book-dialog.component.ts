import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {
  bankForm: FormGroup;
  formErrors: any;
  dataToPass: any;

  constructor(public dialogRef: MatDialogRef<AddBookDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dataToPass = this.data.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeMe(): void {
    this.dialogRef.close();
  }
}
