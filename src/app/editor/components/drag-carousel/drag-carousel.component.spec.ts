import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCarouselComponent } from './drag-carousel.component';

describe('DragCarouselComponent', () => {
  let component: DragCarouselComponent;
  let fixture: ComponentFixture<DragCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
