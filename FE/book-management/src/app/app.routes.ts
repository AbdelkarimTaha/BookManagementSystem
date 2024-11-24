import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/components/book-list/book-list.component';
import { BookDetailComponent } from './components/components/book-detail/book-detail.component';
import { AddBookComponent } from './components/components/add-book/add-book.component';
import { EditBookComponent } from './components/components/edit-book/edit-book.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
