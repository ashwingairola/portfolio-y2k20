import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGithubComponent } from './btn-github.component';

describe('BtnGithubComponent', () => {
  let component: BtnGithubComponent;
  let fixture: ComponentFixture<BtnGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
