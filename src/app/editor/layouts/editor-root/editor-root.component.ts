import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArdonArticleInterface } from '../../../article/models/article.interface';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'ardon-editor-root',
  templateUrl: './editor-root.component.html',
  styleUrl: './editor-root.component.scss',
})
export class EditorRootComponent {
  public tabSelect$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public article: ArdonArticleInterface = this.editorService.article;
  public found: boolean = true;
  constructor(public editorService: EditorService) {}

  public selectedIndex = 0;
  public scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public toggleTab() {
    this.selectedIndex = this.selectedIndex ? 0 : 1;
  }
}
