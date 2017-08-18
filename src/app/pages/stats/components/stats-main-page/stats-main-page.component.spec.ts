import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMainPageComponent } from './stats-main-page.component';

describe('StatsMainPageComponent', () => {
  let component: StatsMainPageComponent;
  let fixture: ComponentFixture<StatsMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
