import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {count, filter, map} from "rxjs/operators";

@Component({
  selector: 'app-path1',
  templateUrl: './path1.component.html',
  styleUrls: ['./path1.component.css']
})
export class Path1Component implements OnInit, OnDestroy {

  private firstObserSubscription: Subscription;
  private secondObserSubscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    // this.firstObserSubscription = interval(1000).subscribe(
    //   (count) => {
    //     console.log(count);
    //   }
    // )

    const customIntervalInterval = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Count is greater than 5!'));
        }
        count++;
      }, 1000);
    });

    // customIntervalInterval.pipe(filter(data => {
    //   return data > 1;
    // }),map((data: number) => {
    //   return 'Round : ' + (data + 1);
    // }))

    this.secondObserSubscription = customIntervalInterval.pipe(filter(data => {
        return data > 1;
      }), map((data: number) => {
        return 'Round : ' + (data + 1);
      }))
      .subscribe(data => {
        console.log('Sub data : ' + data);
      }, error => {
        console.log(error);
        alert(error.message);
      }, () => {
        console.log('Complete...!');
      });
  }

  ngOnDestroy(): void {
    // this.firstObserSubscription.unsubscribe();
    this.secondObserSubscription.unsubscribe();

  }

}
