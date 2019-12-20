import { Component, OnInit } from '@angular/core';
import { GithubRepoService } from './github-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'repo-reflect';

  constructor(private userService: GithubRepoService) { }

  ngOnInit() {

  }

}
