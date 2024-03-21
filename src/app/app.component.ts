import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { ArdonConfigInterface } from './ardon-common/models/ardonConfig.interface';
import { LocalStorageService } from './ardon-core/services/local-storage.service';
import { ThemeService } from './ardon-core/services/theme.service';
import { ConfigService } from './ardon-core/services/config.service';

@Component({
  selector: 'ardon-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title: string = 'ardon';
  public configIsValid$: Observable<boolean> = this.configService.config$.pipe(
    map((config: ArdonConfigInterface) => config.appName.length > 0),
  );
  public showApp: boolean = false;
  constructor(
    private configService: ConfigService,
    private titleService: Title,
    private themeService: ThemeService,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit() {
    this.configService.config$.subscribe((config: ArdonConfigInterface) => { });

    this.themeService.applyTheme();
    this.showApp = true;
  }
}
