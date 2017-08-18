import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMainPageComponent } from './display-main-page.component';

describe('DisplayMainPageComponent', () => {
  let component: DisplayMainPageComponent;
  let fixture: ComponentFixture<DisplayMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
