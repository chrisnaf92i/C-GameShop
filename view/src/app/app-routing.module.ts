import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CategoriePageComponent } from './categorie-page/categorie-page.component';
import { CommandComponent } from './command/command.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PannierComponent } from './pannier/pannier.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {path:"", component: HomePageComponent},
    {path:"acceuil", component: HomePageComponent},
    {path:"article/:id", component: ArticlePageComponent},
    {path:"inscription", component: SigninComponent},
    {path:"connexion", component: LoginComponent},
    {path:"pannier", component: PannierComponent},
    {path:"commander", component: CommandComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}