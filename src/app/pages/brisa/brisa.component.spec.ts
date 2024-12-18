import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisaComponent } from './brisa.component';

describe('BrisaComponent', () => {
  let component: BrisaComponent;
  let fixture: ComponentFixture<BrisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
