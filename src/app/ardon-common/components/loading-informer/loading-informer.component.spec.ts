import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingInformerComponent } from './loading-informer.component';

describe('LoadingInformerComponent', () => {
  let component: LoadingInformerComponent;
  let fixture: ComponentFixture<LoadingInformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingInformerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingInformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
