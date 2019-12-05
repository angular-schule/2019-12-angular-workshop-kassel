import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { map, filter, scan, reduce, repeat, mergeMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn'))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {

    // Vorsicht! Anti-Pattern!
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      map(isbn => this.bs.getSingle(isbn))
    ).subscribe(x =>
      x.subscribe(y => console.log(y))
    );

  }
}
