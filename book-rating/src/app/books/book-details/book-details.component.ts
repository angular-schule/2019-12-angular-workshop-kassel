import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { map, filter, scan, reduce, repeat, mergeMap, concatMap, switchMap, share } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingle(isbn)),
    share()
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {

  }
}
