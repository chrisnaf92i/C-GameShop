import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articleShop } from '../model/article.model';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article!:articleShop;
  isConnected!:boolean
  constructor(private route:ActivatedRoute, private httpClient:HttpClient) { };

  ngOnInit(): void {
    // vérifié si l'utilisateur est connécté
    this.isConnected = localStorage.getItem("user") != undefined;
    // récupération des donnée de l'article
    const id = this.route.snapshot.params['id']

    this.httpClient.get<articleShop>(`http://localhost:3000/api/article/${id}`)
      .subscribe(articleReponse => {
        this.article = articleReponse;
      })
  }

}
