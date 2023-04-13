import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTrademarksComponent } from './legal-trademarks.component';

describe('LegalTrademarksComponent', () => {
  let component: LegalTrademarksComponent;
  let fixture: ComponentFixture<LegalTrademarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalTrademarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalTrademarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
