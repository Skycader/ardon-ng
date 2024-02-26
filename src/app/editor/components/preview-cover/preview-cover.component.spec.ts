import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCoverComponent } from './preview-cover.component';

describe('PreviewCoverComponent', () => {
  let component: PreviewCoverComponent;
  let fixture: ComponentFixture<PreviewCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
