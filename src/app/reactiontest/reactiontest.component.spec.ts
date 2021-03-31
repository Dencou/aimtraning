import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiontestComponent } from './reactiontest.component';

describe('ReactiontestComponent', () => {
  let component: ReactiontestComponent;
  let fixture: ComponentFixture<ReactiontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiontestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
