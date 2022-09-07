import { Component, OnInit } from '@angular/core';
import { articleShop } from '../model/article.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  articleList!:articleShop[];

  ngOnInit(): void {
    this.articleList = [
      {
        name:"The Witcher 3",
        type:"Jeu",
        plateform:"Switch",
        price:2900,
        editor:"CD Project Red",
        sinopsis:"Alors que la guerre fait rage à travers les royaumes du Nord, vous acceptez le contrat de votre vie et partez à la recherche de l'enfant de la prophétie, une arme vivante capable de changer le monde.",
        imageUrl:"https://cdn-products.eneba.com/resized-products/hGWFxkDZ2vHdmSDVNui1DD8J1M8d1hs4xWTc0fqUpCQ_350x200_3x-0.png"
      },
      {
        name:"Demon Souls",
        type:"Jeu",
        plateform:"PS5",
        price:7999,
        editor:"Blue Point",
        sinopsis:"Dans sa quête de pouvoir, le 12e roi de Boletaria, le roi Allant, s'appropria les anciens arts de l'âme, réveillant ainsi un démon aussi vieux que le monde, l'Ancien. Une épaisse brume et des créatures cauchemardesques ayant soif d'âmes humaines envahirent la région suite au réveil de l'Ancien. Ceux dont l'âme avait été volée par les créatures devinrent fous à lier. Leur seul désir était désormais d'attaquer les quelques rescapés encore sains d'esprit.",
        imageUrl:"https://playstationinside.fr/wp-content/uploads/elementor/thumbs/demons_souls_jaquette_03-p7uvqz9hwjgq5fmmdhhsx12xej6s5sl9md2qxfkwbk.png"
      },
      {
        name:"Playstation 5",
        plateform:"PS5",
        type:"Console",
        price:53277,
        editor:"Playstation",
        imageUrl:"https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$"
      },
      {
        name:"Nintendo Switch",
        plateform:"Switch",
        type:"Console",
        price:26955,
        editor:"Nintendo",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Nintendo_Switch_Console.png"
      },
      {
        name:"Halo infinite",
        plateform:"Xbox_Series",
        type:"Jeu",
        price:26900,
        editor:"Xbox",
        imageUrl:"https://global-img.gamergen.com/halo-infinite-images-jaquette-2_0903D4000000926060.png"
      },
      {
        name:"Nier Automata",
        plateform:"PS4",
        type:"Jeu",
        price:3500,
        editor:"Square Enix",
        imageUrl:"https://m.media-amazon.com/images/I/71c5+FqTicS._AC_SX569_.jpg"
      },
      
    ]
  }

}
