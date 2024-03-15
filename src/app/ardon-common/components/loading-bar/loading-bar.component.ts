import { Component, Input } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingBarService } from '../../services/loading-bar.service';

@Component({
  selector: 'ardon-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss',
})
export class LoadingBarComponent {
  @Input() overrideLoading: boolean = false;
  public loading$ = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    public readonly loadingBarService: LoadingBarService,
  ) {}

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
