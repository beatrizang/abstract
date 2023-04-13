import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalProcessingComponent } from './legal-processing.component';

describe('LegalProcessingComponent', () => {
  let component: LegalProcessingComponent;
  let fixture: ComponentFixture<LegalProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
