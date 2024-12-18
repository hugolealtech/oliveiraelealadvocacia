import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoPrevidenciarioComponent } from './planejamento-previdenciario.component';

describe('PlanejamentoPrevidenciarioComponent', () => {
  let component: PlanejamentoPrevidenciarioComponent;
  let fixture: ComponentFixture<PlanejamentoPrevidenciarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanejamentoPrevidenciarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanejamentoPrevidenciarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
