import { Component, OnInit } from '@angular/core';
import { MOCKDATA } from "../mockdata";
@Component({
  selector: 'app-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.css']
})
export class TopReposComponent implements OnInit {
  languages: String[] = ["All", "Java", "Javascript", "Python", "Ruby"]
  // `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  //delete later
  siteurl='https://github.com/freeCodeCamp' 
  image="https://avatars0.githubusercontent.com/u/9892522?v=4" 
  title="freecodecamp"
  mockdata = MOCKDATA;
  //
  constructor() { }

  ngOnInit() {
  }

}
