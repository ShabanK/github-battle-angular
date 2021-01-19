import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [TopReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
