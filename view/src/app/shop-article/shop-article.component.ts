import { Component, OnInit, Input } from '@angular/core';
import { articleShop } from '../model/article.model';

@Component({
  selector: 'app-shop-article',
  templateUrl: './shop-article.component.html',
  styleUrls: ['./shop-article.component.scss']
})
export class ShopArticleComponent implements OnInit {
  @Input() articleData!: articleShop;

  constructor() { }

  ngOnInit(): void {
  }

}
