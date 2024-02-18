import { Component, Input } from '@angular/core';
import { ArdonContentType } from '../../models/article.interface';

interface SubHeadingInterface {
  title: string;
}
@Component({
  selector: 'ardon-subheading',
  templateUrl: './subheading.component.html',
  styleUrl: './subheading.component.scss',
})
export class SubheadingComponent {
  @Input() content: SubHeadingInterface = {
    title: '',
  };
}
