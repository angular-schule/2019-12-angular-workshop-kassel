import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';

import { Book } from '../shared/book';
import { loadBooks } from '../actions/book.actions';
import { selectBookLoading, selectBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // WARNIG BUG! will break after introducing AJAX
})
export class DashboardComponent {

  loading$ = this.store.pipe(select(selectBookLoading, /* { nr: 5 } props here! */));
  books$ = this.store.pipe(select(selectBooks));

  constructor(private store: Store<State>) {
    // this.store.dispatch(loadBooks());
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    // this.books = this.books
    //   .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreate(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
