import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { SchtroumpfService } from './shared/services/schtroumpf.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './shared/guards/auth.guard';
import { AuthInterceptors } from './shared/interceptors/auth.interceptors';


const APP_ROUTE:Route[] = [
  {path:"", component:LoginComponent},
  {path:"profil", canActivate:[AuthGuard], component:ProfilComponent},
  {path:"register", component:RegisterComponent},
  {path:"home", canActivate:[AuthGuard],component:HomeComponent},
]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTE),

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptors,
    multi:true
  },
  SchtroumpfService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
