import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  providers: [BookService],
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup;
  bookId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.editBookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      genre: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publishedYear: [
        '',
        [Validators.required, Validators.min(0), Validators.max(new Date().getFullYear())],
      ],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.bookId = id;
      this.loadBook(id);
    }
  }

  loadBook(id: number): void {
    this.bookService.getBookById(id).subscribe({
      next: (book) => this.editBookForm.patchValue(book),
      error: (err) => {
        console.error(err);
        alert('Failed to load book details.');
      },
    });
  }

  updateBook(): void {
    if (this.editBookForm.valid && this.bookId !== null) {
      this.bookService.updateBook(this.bookId, this.editBookForm.value).subscribe({
        next: () => {
          alert('Book updated successfully!');
          this.router.navigate(['/books']);
        },
        error: (err) => {
          console.error(err);
          alert('Failed to update the book. Please try again later.');
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
