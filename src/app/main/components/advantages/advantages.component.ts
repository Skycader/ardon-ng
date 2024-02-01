import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  AdvantageInterface,
  ArdonConfigInterface,
} from '../../../ardon-common/models/ardonConfig.interface';
import { ConfigService } from '../../../ardon-common/services/config.service';

@Component({
  selector: 'ardon-advantages',
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
  public advantages$: Observable<AdvantageInterface[]> =
    this.configService.config$.pipe(
      map((config: ArdonConfigInterface) => config.advantages)
    );

  constructor(public configService: ConfigService) {}
}
