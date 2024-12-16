import { TestBed } from '@angular/core/testing';

import { AuthAdministrativoService } from './auth-administrativo.service';

describe('AuthAdministrativoService', () => {
  let service: AuthAdministrativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdministrativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
