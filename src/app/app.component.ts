import { Component } from '@angular/core';
import { ConfigService } from './ardon-common/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title: string = 'ardon';

  constructor(private config: ConfigService) {}
}
