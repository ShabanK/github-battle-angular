import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { TopReposComponent } from './components/top-repos/top-repos.component';
import { CardComponent } from './components/card/card.component';

//Services
import { TopReposService } from "./services/top-repos.service"

@NgModule({
  declarations: [
    AppComponent,
    TopReposComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TopReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
