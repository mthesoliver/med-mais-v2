import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventosFavoritosPageRoutingModule } from 'src/app/pages/home-feed/eventos-favoritos/eventos-favoritos-routing.module';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    MatFormFieldModule, 
    MatInputModule,
    EventosFavoritosPageRoutingModule
  ],
})
export class AvaliacaoComponent  implements OnInit {

  avaliacoes = [
    { titulo: 'Como foi sua experiência com nosso aplicativo?' },
    { titulo: 'Como foi sua experiência com nossos serviços?' },
    { titulo: 'Como foi sua experiência com agendamento de exames?' }
  ];
  
  emotes: { isActive: boolean }[][] = Array(this.avaliacoes.length)
    .fill([])
    .map(() => Array(5).fill({ isActive: false }));

  constructor(private route:Router) { }

  ngOnInit() {
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 1000);
  }
  
  toggleEmoteActivation(avaliaIndex: number, emoteIndex: number) {
    // Define todos os emotes do grupo como inativos
    this.emotes[avaliaIndex] = this.emotes[avaliaIndex].map(() => ({ isActive: false }));
  
    // Define o emote clicado como ativo
    this.emotes[avaliaIndex][emoteIndex].isActive = true;
  
    // Use avaliaIndex e emoteIndex para fazer o que for necessário quando um emote é clicado
    console.log(`Emote ${emoteIndex + 1} clicado para ${this.avaliacoes[avaliaIndex].titulo}`);
  }

  onSubmit(){
    this.route.navigate(['/tabs/home-feed']);
  }

}
