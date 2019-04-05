import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogvisitComponent } from './dialogvisit.component';

describe('DialogvisitComponent', () => {
  let component: DialogvisitComponent;
  let fixture: ComponentFixture<DialogvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
