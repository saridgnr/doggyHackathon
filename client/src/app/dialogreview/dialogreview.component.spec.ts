import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogreviewComponent } from './dialogreview.component';

describe('DialogreviewComponent', () => {
  let component: DialogreviewComponent;
  let fixture: ComponentFixture<DialogreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
