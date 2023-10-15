import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarExamesPage } from './agendar-exames.page';

describe('AgendarExamesPage', () => {
  let component: AgendarExamesPage;
  let fixture: ComponentFixture<AgendarExamesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendarExamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
