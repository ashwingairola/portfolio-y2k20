import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillIconComponent } from './skill-icon.component';

describe('SkillIconComponent', () => {
  let component: SkillIconComponent;
  let fixture: ComponentFixture<SkillIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
