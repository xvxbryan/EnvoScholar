import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleinfoComponent } from './articleinfo.component';

describe('ArticleinfoComponent', () => {
  let component: ArticleinfoComponent;
  let fixture: ComponentFixture<ArticleinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
