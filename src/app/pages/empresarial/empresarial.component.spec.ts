import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresarialComponent } from './empresarial.component';

describe('EmpresarialComponent', () => {
  let component: EmpresarialComponent;
  let fixture: ComponentFixture<EmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
