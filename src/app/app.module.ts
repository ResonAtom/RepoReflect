import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GithubRepoService } from './github-repo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GithubRepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
