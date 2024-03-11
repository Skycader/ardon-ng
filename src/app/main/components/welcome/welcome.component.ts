import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { ArdonConfigInterface } from '../../../ardon-common/models/ardonConfig.interface';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';
import { ConfigService } from '../../../ardon-core/services/config.service';

@Component({
  selector: 'ardon-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  public bg$: Observable<string> = this.configService.config$.pipe(
    switchMap((config: ArdonConfigInterface) => {
      return of(`url(${config.appBackgroundImage})`);
    }),
  );

  constructor(
    public configService: ConfigService,
    private router: Router,
    private photo: PhotoViewerService,
  ) {}

  public scrollToRecentArticles() {
    document.querySelector('.recent-articles')?.scrollIntoView();
  }

  public goTo(route: string[] | undefined) {
    if (!route) {
      console.log('Route broken', route);
      return;
    }
    this.router.navigate(route);
  }

  public openForm() {}
}
