import { TestBed } from '@angular/core/testing';

import { ListarMedicosService as CadastroMedicosService } from './listar-medicos.service';

describe('CadastroMedicosService', () => {
  let service: CadastroMedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroMedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
