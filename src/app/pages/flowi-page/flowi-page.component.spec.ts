import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowiPageComponent } from './flowi-page.component';

describe('FlowiPageComponent', () => {
  let component: FlowiPageComponent;
  let fixture: ComponentFixture<FlowiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
