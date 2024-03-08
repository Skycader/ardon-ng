import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAccordionComponent } from './drag-accordion.component';

describe('DragAccordionComponent', () => {
  let component: DragAccordionComponent;
  let fixture: ComponentFixture<DragAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
