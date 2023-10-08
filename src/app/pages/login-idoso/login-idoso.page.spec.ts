import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginIdosoPage } from './login-idoso.page';

describe('LoginIdosoPage', () => {
  let component: LoginIdosoPage;
  let fixture: ComponentFixture<LoginIdosoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginIdosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
