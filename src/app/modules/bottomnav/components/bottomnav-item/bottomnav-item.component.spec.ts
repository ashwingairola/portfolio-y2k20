import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomnavItemComponent } from './bottomnav-item.component';

describe('BottomnavItemComponent', () => {
  let component: BottomnavItemComponent;
  let fixture: ComponentFixture<BottomnavItemComponent>;

  beforeEach(async(() => {
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
