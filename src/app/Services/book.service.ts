import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../Models/book.models';
@Injectable({
  providedIn: 'root'
})
export class BookService {
private books: Book[] = [];
private idCounter = 1;
constructor() { }
getBooks(): Observable<Book[]> {
return of(this.books);
}
addBook(book: Book): Observable<Book> {
book.id = this.idCounter++;
this.books.push(book);
return of(book);
}
}
