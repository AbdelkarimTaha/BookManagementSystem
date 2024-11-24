import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../../../services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  providers: [BookService],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    console.log('hello');
    this.bookService.getBooks().subscribe((data) => {
    console.log(data);

      this.books = data;
    });
  }

  viewBook(id: number): void {
    this.router.navigate(['/books', id]);
  }

  editBook(id: number): void {
    this.router.navigate(['/edit-book', id]);
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.books = this.books.filter((book) => book.id !== id);
          alert('Book deleted successfully.');
        },
        error: (err) => {
          console.error(err);
          alert('Failed to delete the book. Please try again later.');
        },
      });
    }
  }
}
