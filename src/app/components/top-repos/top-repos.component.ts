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
  currentTenRepos=[];
  fetchedData;
  
  //
  constructor(public topReposService:TopReposService) { }

  ngOnInit() {
    this.languages.forEach(language=>{
        this.topReposService.fetchData(language).subscribe(fetchedData=>{
        this.fetchedData=fetchedData
        this.fetchedData.langId=language
        this.completeData.push(this.fetchedData)
      })
    })
  }
  
  consoleLogger(){
    console.log(this.completeData)
  }

  handleChange(language:string){
    console.log(language)
    let currentDemandedRepos = this.completeData.find(item=>item.langId===language)
    console.log(currentDemandedRepos)
    this.currentTenRepos = currentDemandedRepos.items.slice(0,10)
  }

}
