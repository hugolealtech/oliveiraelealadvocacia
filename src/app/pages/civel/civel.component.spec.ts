import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivelComponent } from './civel.component';

describe('CivelComponent', () => {
  let component: CivelComponent;
  let fixture: ComponentFixture<CivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
