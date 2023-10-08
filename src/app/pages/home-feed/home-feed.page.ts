import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponsavel } from 'src/app/models/user-responsavel';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.page.html',
  styleUrls: ['./home-feed.page.scss'],
})
export class HomeFeedPage implements OnInit {
  nome:UserResponsavel = new UserResponsavel;
  user:any
  constructor(private route: Router ,public authService:AuthenticationService) { 
    this.user = authService.getProfile()
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

}
