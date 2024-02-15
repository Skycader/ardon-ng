import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorTextareaComponent } from './editor-textarea.component';

describe('EditorTextareaComponent', () => {
  let component: EditorTextareaComponent;
  let fixture: ComponentFixture<EditorTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
