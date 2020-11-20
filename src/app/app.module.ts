import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { SchtroumpfService } from './shared/services/schtroumpf.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';



const APP_ROUTE:Route[] = [
  {path:"login", component:LoginComponent},
  {path:"profil", component:ProfilComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    FriendListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTE),

  ],
  providers: [SchtroumpfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
