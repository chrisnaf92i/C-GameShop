import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopArticleComponent } from './shop-article/shop-article.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CategoriePageComponent } from './categorie-page/categorie-page.component';
import { CommandComponent } from './command/command.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { PannierComponent } from './pannier/pannier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomePageComponent,
    ShopArticleComponent,
    CategoriePageComponent,
    CommandComponent,
    SigninComponent,
    LoginComponent,
    PannierComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
