import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCoverListComponent } from './article-cover-list.component';

describe('ArticleCoverListComponent', () => {
  let component: ArticleCoverListComponent;
  let fixture: ComponentFixture<ArticleCoverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleCoverListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleCoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
