import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarwithsearchComponent } from './navbarwithsearch.component';

describe('NavbarwithsearchComponent', () => {
  let component: NavbarwithsearchComponent;
  let fixture: ComponentFixture<NavbarwithsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarwithsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarwithsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
