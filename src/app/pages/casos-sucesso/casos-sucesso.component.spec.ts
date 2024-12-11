import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosSucessoComponent } from './casos-sucesso.component';

describe('CasosSucessoComponent', () => {
  let component: CasosSucessoComponent;
  let fixture: ComponentFixture<CasosSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasosSucessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasosSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
