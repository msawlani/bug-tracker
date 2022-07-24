import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListPageComponent } from './bug-list-page.component';

describe('BugListPageComponent', () => {
  let component: BugListPageComponent;
  let fixture: ComponentFixture<BugListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
