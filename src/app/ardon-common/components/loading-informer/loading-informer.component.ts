import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'ardon-loading-informer',
  templateUrl: './loading-informer.component.html',
  styleUrl: './loading-informer.component.scss',
})
export class LoadingInformerComponent {
  public loadingPercentage = interval(5);
}
