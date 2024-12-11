import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhistaComponent } from './trabalhista.component';

describe('TrabalhistaComponent', () => {
  let component: TrabalhistaComponent;
  let fixture: ComponentFixture<TrabalhistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabalhistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
