import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn'))
  );

  sub2: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // 1. Observer
    const observer = {
      next: x => console.log(x),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE!')
    };

    const subscription = of('😎', '🧐', '🤠', '🤮').subscribe(observer);
    subscription.unsubscribe();

    // warnung! leak
    this.sub2 = interval(1000).subscribe(e => console.log(e));

  }

  ngOnDestroy() {
    this.sub2.unsubscribe();
  }
}
