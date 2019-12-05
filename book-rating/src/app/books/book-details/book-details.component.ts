import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, catchError } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingle(isbn)),
    catchError((err: HttpErrorResponse) => of({
      title: 'Fehler!',
      description: 'beim Laden von ' + err.url
    }))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }
}
