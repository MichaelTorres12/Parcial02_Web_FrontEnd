import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './login/login.component';
import { TablaCandidatosComponent } from './tabla-candidatos/tabla-candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    TablaCandidatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
