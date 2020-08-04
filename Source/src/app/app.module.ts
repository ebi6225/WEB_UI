
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './public/home/home.component';
import { ContactComponent } from './public/contact/contact.component';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { AboutComponent } from './public/about/about.component';
import { LoginComponent } from './public/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
