import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPessoasPage } from './add-pessoas.page';

describe('AddPessoasPage', () => {
  let component: AddPessoasPage;
  let fixture: ComponentFixture<AddPessoasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
