import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.page.html',
  styleUrls: ['./home-feed.page.scss'],
})
export class HomeFeedPage implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser

  constructor(private route: Router, public authService:AuthenticationService) { 
    
  }

  ngOnInit() {
  }

  async logout(){
    this.authService.signOut().then(()=>{
      this.route.navigate(['/home']);
    }).catch((error)=>{
      console.log(error);
    })
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }

}
