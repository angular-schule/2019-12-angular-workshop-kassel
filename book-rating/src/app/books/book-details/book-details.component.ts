import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, interval, Subscription } from 'rxjs';
import { map, take, takeWhile, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn'))
  );

  number$: Observable<number>;

  active = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // 1. Observer
    const observer = {
      next: x => console.log(x),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE!')
    };

    // 2. Observable
    const myObservable = new Observable(subscriber => {
      subscriber.next('😀');
      subscriber.next('😍');
      subscriber.next('😡');

      setTimeout(() => {
        console.log('Brennt das Licht im Kühlschrank?');
        subscriber.next('😳');
      }, 2000);

      subscriber.error('FEHLER!');
    });

    // 3. Subscription
    const subscription = myObservable.subscribe(observer);
    // subscription.unsubscribe();

    // warnung! leak
    this.number$ = interval(1000);

  }

  ngOnDestroy() {
    this.active = false;
  }
}
