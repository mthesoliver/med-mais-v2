import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }

}
