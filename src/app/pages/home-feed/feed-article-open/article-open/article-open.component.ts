import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-article-open',
  templateUrl: './article-open.component.html',
  styleUrls: ['./article-open.component.scss'],
  standalone:true,
  imports:[
    IonicModule,
  ]
})
export class ArticleOpenComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
