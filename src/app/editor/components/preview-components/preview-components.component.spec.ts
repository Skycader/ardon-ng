import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewComponentsComponent } from './preview-components.component';

describe('PreviewComponentsComponent', () => {
  let component: PreviewComponentsComponent;
  let fixture: ComponentFixture<PreviewComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
