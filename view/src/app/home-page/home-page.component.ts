import { Component, OnInit } from '@angular/core';
import { articleShop } from '../model/article.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  articleList!:articleShop[];
  private articlesListUrl = "http://localhost:3000/api/article"

  constructor (private _httpClient:HttpClient) {

  }

  ngOnInit(): void {
    this._httpClient.get<articleShop[]>(this.articlesListUrl)
      .subscribe(articlesListReponse => {
        this.articleList = articlesListReponse;
      })
  }
}
