import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomnavItemComponent } from './bottomnav-item.component';

describe('BottomnavItemComponent', () => {
  let component: BottomnavItemComponent;
  let fixture: ComponentFixture<BottomnavItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomnavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomnavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
