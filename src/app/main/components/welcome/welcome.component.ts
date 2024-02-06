import { Component } from '@angular/core';
import { ConfigService } from '../../../ardon-common/services/config.service';
import { Observable, of, switchMap } from 'rxjs';
import { ArdonConfigInterface } from '../../../ardon-common/models/ardonConfig.interface';

@Component({
  selector: 'ardon-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  public bg$: Observable<string> = this.configService.config$.pipe(
    switchMap((config: ArdonConfigInterface) => {
      return of(`url(${config.appBackgroundImage})`);
    }),
  );

  constructor(public configService: ConfigService) { }
}
