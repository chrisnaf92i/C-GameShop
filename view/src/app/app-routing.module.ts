import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CategoriePageComponent } from './categorie-page/categorie-page.component';
import { CommandComponent } from './command/command.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PannierComponent } from './pannier/pannier.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {path:"acceuil", component: HomePageComponent},
    {path:"categorie", component: CategoriePageComponent},
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