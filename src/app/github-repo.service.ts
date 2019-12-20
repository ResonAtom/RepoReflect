import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {

  perPage = 100

  constructor(private http: HttpClient) {}

  getCommits(repoPath:string) {
    return this.http.get(`https://api.github.com/repos/${repoPath}/commits?per_page=${this.perPage}`);
  }

}
