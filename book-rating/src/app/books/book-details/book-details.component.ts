import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { map, filter, scan, reduce } from 'rxjs/operators';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn'))
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    from([1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      map(x => x * 10),
      filter(x => x > 30),
      reduce((x, y) => x + y),
      map(x => '❤️'.repeat(x))
    ).subscribe(console.log);

  }
}
