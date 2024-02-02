import { Component } from '@angular/core';
import { ConfigService } from './ardon-common/services/config.service';
import { Title } from '@angular/platform-browser';
import { ArdonConfigInterface } from './ardon-common/models/ardonConfig.interface';

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
  ) { }

  ngOnInit() {
    this.config.config$.subscribe((config: ArdonConfigInterface) => {
      this.titleService.setTitle(config.appName);
    });
  }
}
