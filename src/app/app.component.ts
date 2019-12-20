import { Component, OnInit } from '@angular/core';
import { GithubRepoService } from './github-repo.service';
import { Observable } from 'rxjs'; // TODO would rely on tree shaking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  repoPath = 'ResonAtom/RepoReflect';
  commits:Observable<Object>;

  constructor(private repoService: GithubRepoService) { }

  ngOnInit() {
    this.commits = this.repoService.getCommits(this.repoPath)
    this.commits.subscribe(item => {
      console.log(item);
    });
  }

}
