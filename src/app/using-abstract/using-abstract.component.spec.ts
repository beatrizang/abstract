import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAbstractComponent } from './using-abstract.component';

describe('UsingAbstractComponent', () => {
  let component: UsingAbstractComponent;
  let fixture: ComponentFixture<UsingAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingAbstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
