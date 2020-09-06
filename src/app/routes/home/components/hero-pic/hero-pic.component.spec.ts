import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPicComponent } from './hero-pic.component';

describe('HeroPicComponent', () => {
  let component: HeroPicComponent;
  let fixture: ComponentFixture<HeroPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
