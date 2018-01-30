import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: 'AIzaSyB48xzIWfMx3gyUozWkdsHQ11RTE5r195A',
  authDomain: 'animated-verve-108110.firebaseapp.com',
  databaseURL: 'https://animated-verve-108110.firebaseio.com',
  projectId: 'animated-verve-108110',
  storageBucket: 'animated-verve-108110.appspot.com',
  messagingSenderId: '465648677714'
};

import {
  MatNativeDateModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatRadioModule,
  MatButtonToggleModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CapitalizePipe } from './shared/pipes/capitalize/capitalize.pipe';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FirebaseService } from './shared/services/firebase/firebase.service';
import { ValidationService } from './shared/services/validation/validation.service';
import { AddBookFormComponent } from './shared/components/add-book-form/add-book-form.component';
import { AddBookDialogComponent } from './shared/components/add-book-dialog/add-book-dialog.component';
import { DeletePromptDialogComponent } from './shared/components/delete-prompt-dialog/delete-prompt-dialog.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    CapitalizePipe,
    NavbarComponent,
    AddBookFormComponent,
    AddBookDialogComponent,
    DeletePromptDialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ValidationService, FirebaseService],
  bootstrap: [AppComponent],
  entryComponents: [AddBookDialogComponent, DeletePromptDialogComponent]
})
export class AppModule {
}
