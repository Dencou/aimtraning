import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainaimtraningComponent } from './mainaimtraning.component';

describe('MainaimtraningComponent', () => {
  let component: MainaimtraningComponent;
  let fixture: ComponentFixture<MainaimtraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainaimtraningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainaimtraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
