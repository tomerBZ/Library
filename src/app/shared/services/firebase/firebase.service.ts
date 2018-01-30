import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book } from '../../interfaces/book';

@Injectable()
export class FirebaseService {
  booksCol: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  bookDoc: AngularFirestoreDocument<Book>;
  book: Observable<Book>;

  constructor(private _afs: AngularFirestore) {
    this.booksCol = this._afs.collection('books');
    this.books = this.booksCol.valueChanges();
  }

  /**
   * Adding book form clean form data
   * @param data
   */
  addBook(data) {
    this._afs.collection('books')
      .doc(data.name)
      .set({'name': data.name, 'author': data.author, 'image': data.image, 'description': data.description, 'date': data.date});
  }

  /**
   * Get book by name
   * @param name
   * @returns {Observable<Book>}
   */
  getBook(name: any) {
    this.bookDoc = this._afs.doc('books/' + name);
    this.book = this.bookDoc.valueChanges();
    return this.book;
  }

  /**
   * Delete book if exist by book name
   * @param name
   */
  deleteBook(name: any) {
    this._afs.collection('books').doc(name).delete().then(function () {
      console.log('Document successfully deleted!');
    }).catch(function (error) {
      console.error('Error removing document: ', error);
    });
  }
}
