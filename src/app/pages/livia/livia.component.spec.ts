import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiviaComponent } from './livia.component';

describe('LiviaComponent', () => {
  let component: LiviaComponent;
  let fixture: ComponentFixture<LiviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiviaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
