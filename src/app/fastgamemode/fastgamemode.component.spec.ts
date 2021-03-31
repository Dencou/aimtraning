import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastgamemodeComponent } from './fastgamemode.component';

describe('FastgamemodeComponent', () => {
  let component: FastgamemodeComponent;
  let fixture: ComponentFixture<FastgamemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastgamemodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastgamemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
