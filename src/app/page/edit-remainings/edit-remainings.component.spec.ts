import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemainingsComponent } from './edit-remainings.component';

describe('EditRemainingsComponent', () => {
  let component: EditRemainingsComponent;
  let fixture: ComponentFixture<EditRemainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRemainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
