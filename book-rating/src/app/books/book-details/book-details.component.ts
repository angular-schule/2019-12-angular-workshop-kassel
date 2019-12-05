import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
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

    from([1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
      map(x => x * 10)
      // 2. lasse nur Werte durch, die größer sind als 30
      // 3. bilde die Summe aus allen Zahlen
      // 4. knobelaufgabe: entsprechend der Summe, so viele Smilies ausgeben

    ).subscribe(console.log);

  }
}
