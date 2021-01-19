import { Component, OnInit } from '@angular/core';
import { MOCKDATA } from "../mockdata";
import {TopReposService} from "../../services/top-repos.service"

@Component({
  selector: 'app-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.css']
})
export class TopReposComponent implements OnInit {
  languages: string[] = ["All", "Java", "Javascript", "Python", "Ruby"]
  // `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  mockdata = MOCKDATA;
  completeData = []
  currentTenRepos=[{}];
  fetchedData;
  
  //
  constructor(public topReposService:TopReposService) { }

  ngOnInit() {
    // this.topReposService.fetchData("All")
    // .subscribe(repos=>this.currentTenRepos=repos)
    this.completeData = this.languages.map(language=>{
        this.topReposService.fetchData(language).subscribe(fetchedData=>{
        this.fetchedData=fetchedData
        this.fetchedData.langId=language
        return this.fetchedData
    })
    // this.topReposService.fetchData('All').subscribe(fetchedData=>{
    //   this.fetchedData=fetchedData
    //   this.fetchedData.langId="All"
    //   this.completeData.push(this.fetchedData)
    })
  }
  consoleLogger(){
    console.log(this.fetchedData)
    console.log(this.completeData)
  }

}
