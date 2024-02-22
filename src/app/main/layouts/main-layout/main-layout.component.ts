import { Component } from '@angular/core';
import { ConfigService } from '../../../ardon-core/services/config.service';

@Component({
  selector: 'ardon-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  constructor(public configService: ConfigService) { }
}
