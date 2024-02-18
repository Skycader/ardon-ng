import { Component, Input } from '@angular/core';
import {
  ArdonContentType,
  ArdonSubheadingBlockInterface,
} from '../../models/article.interface';

@Component({
  selector: 'ardon-subheading',
  templateUrl: './subheading.component.html',
  styleUrl: './subheading.component.scss',
})
export class SubheadingComponent {
  @Input() content: ArdonSubheadingBlockInterface = {
    title: '',
  };
}
