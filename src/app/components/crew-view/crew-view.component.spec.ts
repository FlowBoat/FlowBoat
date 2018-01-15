import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewViewComponent } from './crew-view.component';

describe('CrewViewComponent', () => {
  let component: CrewViewComponent;
  let fixture: ComponentFixture<CrewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
