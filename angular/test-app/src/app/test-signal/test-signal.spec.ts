import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignal } from './test-signal';

describe('TestSignal', () => {
  let component: TestSignal;
  let fixture: ComponentFixture<TestSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(TestSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
