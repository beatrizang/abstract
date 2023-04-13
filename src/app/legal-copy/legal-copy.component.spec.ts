import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCopyComponent } from './legal-copy.component';

describe('LegalCopyComponent', () => {
  let component: LegalCopyComponent;
  let fixture: ComponentFixture<LegalCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
