import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomnavComponent } from './bottomnav.component';

describe('BottomnavComponent', () => {
  let component: BottomnavComponent;
  let fixture: ComponentFixture<BottomnavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
