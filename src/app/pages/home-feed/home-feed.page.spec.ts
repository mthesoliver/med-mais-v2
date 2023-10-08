import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFeedPage } from './home-feed.page';

describe('HomeFeedPage', () => {
  let component: HomeFeedPage;
  let fixture: ComponentFixture<HomeFeedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
