import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


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

    // 1. Observer
    const observer = {
      next: x => console.log(x),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE!')
    };

    of('😎', '🧐', '🤠', '🤮').subscribe(observer);
  }
}
