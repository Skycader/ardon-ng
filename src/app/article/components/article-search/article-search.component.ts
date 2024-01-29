import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'ardon-article-search',
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss',
})
export class ArticleSearchComponent {
  public value = '';
  public articles = [1, 2, 3];
}
