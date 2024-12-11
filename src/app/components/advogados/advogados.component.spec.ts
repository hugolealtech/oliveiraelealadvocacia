import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvogadosComponent } from './advogados.component';

describe('AdvogadosComponent', () => {
  let component: AdvogadosComponent;
  let fixture: ComponentFixture<AdvogadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvogadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
