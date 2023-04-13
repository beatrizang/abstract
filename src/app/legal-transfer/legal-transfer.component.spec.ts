import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTransferComponent } from './legal-transfer.component';

describe('LegalTransferComponent', () => {
  let component: LegalTransferComponent;
  let fixture: ComponentFixture<LegalTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
