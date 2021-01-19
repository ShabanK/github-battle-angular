import { Component } from '@angular/core';
import { MOCKDATA } from "./components/mockdata"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mockdata = MOCKDATA;
  title = 'Hello World';
}
