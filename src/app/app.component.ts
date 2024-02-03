import { Component } from '@angular/core';
import { ConfigService } from './ardon-common/services/config.service';
import { Title } from '@angular/platform-browser';
import { ArdonConfigInterface } from './ardon-common/models/ardonConfig.interface';
import { ThemeService } from './ardon-core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title: string = 'ardon';

  constructor(
    private config: ConfigService,
    private titleService: Title,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    this.config.config$.subscribe((config: ArdonConfigInterface) => {
      this.titleService.setTitle(config.appName);
    });

    this.themeService.applyTheme();
  }
}
