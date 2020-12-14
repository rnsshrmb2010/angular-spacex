import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LContentComponent } from './l-content.component';

describe('LContentComponent', () => {
  let component: LContentComponent;
  let fixture: ComponentFixture<LContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
