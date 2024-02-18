import { Component, OnInit } from '@angular/core';
import { ConfigService } from './ardon-common/services/config.service';
import { Title } from '@angular/platform-browser';
import { ArdonConfigInterface } from './ardon-common/models/ardonConfig.interface';
import { ThemeService } from './ardon-core/services/theme.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'ardon-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title: string = 'ardon';
  public configIsValid$: Observable<boolean> = this.configService.config$;
  public showApp: boolean = false;
  constructor(
    private configService: ConfigService,
    private titleService: Title,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    this.configService.config$.subscribe((config: ArdonConfigInterface) => {
      this.titleService.setTitle(config.appName);
    });

    this.themeService.applyTheme();
    this.showApp = true;
  }
}
