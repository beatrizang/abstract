import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAcceptableComponent } from './legal-acceptable.component';

describe('LegalAcceptableComponent', () => {
  let component: LegalAcceptableComponent;
  let fixture: ComponentFixture<LegalAcceptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalAcceptableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalAcceptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
