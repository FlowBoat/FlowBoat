import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloombudPageComponent } from './bloombud-page.component';

describe('BloombudPageComponent', () => {
  let component: BloombudPageComponent;
  let fixture: ComponentFixture<BloombudPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloombudPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloombudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
