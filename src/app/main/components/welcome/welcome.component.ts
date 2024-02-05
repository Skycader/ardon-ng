import { Component } from '@angular/core';
import { ConfigService } from '../../../ardon-common/services/config.service';

@Component({
  selector: 'ardon-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  public bg: string = 'assets/images.background.jpg';
  constructor(public configService: ConfigService) {}
}
