import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubAPIService } from './Services/github-api.service';
import { SearchProfileComponent } from './Components/search-profile/search-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    GithubAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
