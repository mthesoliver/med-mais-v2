import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemediosAlarmesPage } from './remedios-alarmes.page';

describe('RemediosAlarmesPage', () => {
  let component: RemediosAlarmesPage;
  let fixture: ComponentFixture<RemediosAlarmesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RemediosAlarmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
