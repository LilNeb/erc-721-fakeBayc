import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNefturiansUserTokensComponent } from './fake-nefturians-user-tokens.component';

describe('FakeNefturiansUserTokensComponent', () => {
  let component: FakeNefturiansUserTokensComponent;
  let fixture: ComponentFixture<FakeNefturiansUserTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeNefturiansUserTokensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeNefturiansUserTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
