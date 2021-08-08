import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemainingsComponent } from './list-remainings.component';

describe('ListRemainingsComponent', () => {
  let component: ListRemainingsComponent;
  let fixture: ComponentFixture<ListRemainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
