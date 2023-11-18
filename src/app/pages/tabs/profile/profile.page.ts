import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }

  goToReset(){
    this.route.navigate(['/reset-password']);
  }

}
