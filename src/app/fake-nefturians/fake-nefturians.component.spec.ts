import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNefturiansComponent } from './fake-nefturians.component';

describe('FakeNefturiansComponent', () => {
  let component: FakeNefturiansComponent;
  let fixture: ComponentFixture<FakeNefturiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeNefturiansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeNefturiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
