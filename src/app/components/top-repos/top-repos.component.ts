import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.css']
})
export class TopReposComponent implements OnInit {
  languages: String[] = ["All", "Java", "Javascript", "Python", "Ruby"]
  // `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  constructor() { }

  ngOnInit() {
  }

}
