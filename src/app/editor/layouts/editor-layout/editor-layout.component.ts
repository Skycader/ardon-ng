import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ardon-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrl: './editor-layout.component.scss',
})
export class EditorLayoutComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Редактор статей');
  }
}
