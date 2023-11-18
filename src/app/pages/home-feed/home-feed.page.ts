import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { getAuth } from '@angular/fire/auth';
import { AvaliacaoModalService } from 'src/app/services/avaliacao-modal.service';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.page.html',
  styleUrls: ['./home-feed.page.scss'],
})
export class HomeFeedPage implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser

  constructor(private route: Router, public authService:AuthenticationService, private avaliacaoModalService: AvaliacaoModalService, private cdr: ChangeDetectorRef) { 
    
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.avaliacaoModalService.exibirAvaliacaoModal();
      this.cdr.detectChanges(); // Detecção de mudanças para evitar a ExpressionChangedAfterItHasBeenCheckedError
    }, 5000);
  }

}
