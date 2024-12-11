import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensaoMorteComponent } from './pensao-morte.component';

describe('PensaoMorteComponent', () => {
  let component: PensaoMorteComponent;
  let fixture: ComponentFixture<PensaoMorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensaoMorteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensaoMorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
