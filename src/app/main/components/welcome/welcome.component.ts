import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { ArdonConfigInterface } from '../../../ardon-common/models/ardonConfig.interface';
import { PhotoViewerService } from '../../../ardon-common/services/photo-viewer.service';
import { ConfigService } from '../../../ardon-core/services/config.service';
import { FormViewerService } from '../../../ardon-common/services/form-viewer.service';

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
    private formViewer: FormViewerService,
  ) { }

  public startButtons: any[] = [];

  ngOnInit() {
    this.startButtons = this.configService.config.startButtons;
  }

  public scrollToRecentArticles() {
    document.querySelector('.recent-articles')?.scrollIntoView();
  }

  public goTo(route: string[] | undefined) {
    console.log('[ROUTE SWITCH]', route);
    if (!route) {
      console.log('Route broken', route);
      return;
    }
    this.router.navigate(route);
  }

  public openFeedback() {
    this.formViewer.open({
      type: 'iframe',
      url: 'https://forms.yandex.ru/cloud/65ef16d45d2a06139b15dfbd/?iframe=1',
    });
  }
}
