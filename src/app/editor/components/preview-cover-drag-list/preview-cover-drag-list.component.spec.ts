import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCoverDragListComponent } from './preview-cover-drag-list.component';

describe('PreviewCoverDragListComponent', () => {
  let component: PreviewCoverDragListComponent;
  let fixture: ComponentFixture<PreviewCoverDragListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewCoverDragListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewCoverDragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
