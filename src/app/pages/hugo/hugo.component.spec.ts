import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugoComponent } from './hugo.component';

describe('HugoComponent', () => {
  let component: HugoComponent;
  let fixture: ComponentFixture<HugoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HugoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HugoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
