import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [BookService],
})
export class AddBookComponent {
  addBookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.addBookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      genre: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publishedYear: [
        0,
        [Validators.required, Validators.min(0), Validators.max(new Date().getFullYear())],
      ],
    });
  }

  onSubmit(): void {
    if (this.addBookForm.valid) {
      this.bookService.addBook(this.addBookForm.value).subscribe({
        next: () => {
          alert('Book added successfully!');
          this.router.navigate(['/books']);
        },
        error: (err) => {
          console.error(err);
          alert('Failed to add the book. Please try again later.');
        },
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
