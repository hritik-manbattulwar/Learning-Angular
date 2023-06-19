import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubSearchAppComponent } from './components/github-search-app/github-search-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDetailsComponent } from './components/github-profile-details/github-profile-details.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GithubSearchAppComponent,
    GithubProfileComponent,
    GithubReposComponent,
    GithubProfileCardComponent,
    GithubProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
