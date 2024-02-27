import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCollageComponent } from './drag-collage.component';

describe('DragCollageComponent', () => {
  let component: DragCollageComponent;
  let fixture: ComponentFixture<DragCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragCollageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
