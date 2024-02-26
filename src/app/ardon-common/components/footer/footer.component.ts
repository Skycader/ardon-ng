import { Component } from '@angular/core';
import { ConfigService } from '../../../ardon-core/services/config.service';

@Component({
  selector: 'ardon-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public configService: ConfigService) { }
}
