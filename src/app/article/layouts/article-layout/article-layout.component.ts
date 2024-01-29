import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ardon-article-layout',
  templateUrl: './article-layout.component.html',
  styleUrl: './article-layout.component.scss',
})
export class ArticleLayoutComponent {
  constructor(private router: Router) {}

  public ngOnInit(): void {
    console.log(this.router);
  }
}
