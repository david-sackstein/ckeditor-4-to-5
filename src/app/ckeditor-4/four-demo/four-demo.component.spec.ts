import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourDemoComponent } from './four-demo.component';

describe('FourDemoComponent', () => {
  let component: FourDemoComponent;
  let fixture: ComponentFixture<FourDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourDemoComponent]
    });
    fixture = TestBed.createComponent(FourDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
