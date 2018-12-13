import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayresultsComponent } from './displayresults.component';

describe('DisplayresultsComponent', () => {
  let component: DisplayresultsComponent;
  let fixture: ComponentFixture<DisplayresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
