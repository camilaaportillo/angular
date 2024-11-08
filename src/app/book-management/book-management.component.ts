import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/book.models';
import { BookService } from '../Services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-management',
  standalone: true,

  templateUrl: './book-management.component.html',
  imports: [CommonModule, FormsModule]
})
export class BookManagementComponent implements OnInit {
  books: Book[] = [];
  book: Book = { id: 0, title: '', author: '', year: 0 };
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    //this.loadBooks();
  }
  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => (this.books =
      data));
  }
  addBook(): void {
    if (!this.book.title || !this.book.author || !this.book.year) {
      return; // Validación de campos
    }
    this.bookService.addBook({ ...this.book }).subscribe((newBook) => {
      this.books.push(newBook);
      this.book = { id: 0, title: '', author: '', year: 0 };
    });
  }
}
