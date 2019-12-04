import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // WARNIG BUG! will break after introducing AJAX
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) { }

  ngOnInit() {
    this.books = [{
        isbn: '000',
        title: 'Angular',
        description: 'Tolles Buch!',
        rating: 5
      }, {
        isbn: '111',
        title: 'AngularJS',
        description: 'Altes Buch!',
        rating: 3
      }, {
        isbn: '222',
        title: 'React',
        description: ':-/',
        rating: 1
      }
    ];
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // Karl was lazy and did this:
    // const ratedBook = {
    //   ...book,
    //   rating: ++book.rating
    // };
    const ratedBook = this.br.rateUp(book);

    this.updateAndSortList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSortList(ratedBook);
  }

  updateAndSortList(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
      .sort((a, b) => b.rating - a.rating);
  }
}
