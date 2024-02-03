import { Component } from '@angular/core';
import { ResolveEnd, ResolveStart, Router, RouterEvent } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'ardon-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss',
})
export class LoadingBarComponent {
  public loading$ = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) { }

  public ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        this.loading$.next(true);
      }
      if (event instanceof ResolveEnd) {
        this.loading$.next(false);
      }
    });
  }
}
