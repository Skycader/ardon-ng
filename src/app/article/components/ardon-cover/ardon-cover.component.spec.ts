import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdonCoverComponent } from './ardon-cover.component';

describe('ArdonCoverComponent', () => {
  let component: ArdonCoverComponent;
  let fixture: ComponentFixture<ArdonCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArdonCoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArdonCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
