import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptioComponent } from './subscriptio.component';

describe('SubscriptioComponent', () => {
  let component: SubscriptioComponent;
  let fixture: ComponentFixture<SubscriptioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
