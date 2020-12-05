import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BtnProjectLinkComponent } from './btn-project-link.component';

describe('BtnProjectLinkComponent', () => {
  let component: BtnProjectLinkComponent;
  let fixture: ComponentFixture<BtnProjectLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnProjectLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
