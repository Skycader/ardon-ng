import { Component } from '@angular/core';
import { AdvantageInterface } from '../../../ardon-common/models/ardonConfig.interface';
import { ConfigService } from '../../../ardon-common/services/config.service';

@Component({
  selector: 'ardon-advantages',
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
  public advantages: AdvantageInterface[] =
    this.configService.config.advantages;
  constructor(public configService: ConfigService) {}
}
