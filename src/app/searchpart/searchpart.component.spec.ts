import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpartComponent } from './searchpart.component';

describe('SearchpartComponent', () => {
  let component: SearchpartComponent;
  let fixture: ComponentFixture<SearchpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
