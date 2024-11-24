import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Book, BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [BookService],
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadBook(id);
    }
  }

  loadBook(id: number): void {
    this.bookService.getBookById(id).subscribe({
      next: (data) => (this.book = data),
      error: (err) => {
        console.error(err);
        alert('Failed to load book details.');
        this.router.navigate(['/books']);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
