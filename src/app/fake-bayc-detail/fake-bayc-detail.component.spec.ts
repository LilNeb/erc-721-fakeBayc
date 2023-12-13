import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBaycDetailComponent } from './fake-bayc-detail.component';

describe('FakeBaycDetailComponent', () => {
  let component: FakeBaycDetailComponent;
  let fixture: ComponentFixture<FakeBaycDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeBaycDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeBaycDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
