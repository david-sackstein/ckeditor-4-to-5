import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDemoComponent } from './five-demo.component';

describe('FiveDemoComponent', () => {
  let component: FiveDemoComponent;
  let fixture: ComponentFixture<FiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveDemoComponent]
    });
    fixture = TestBed.createComponent(FiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
