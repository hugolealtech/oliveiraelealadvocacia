import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPCComponent } from './bpc.component';

describe('BPCComponent', () => {
  let component: BPCComponent;
  let fixture: ComponentFixture<BPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BPCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
