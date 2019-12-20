import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {

  apiUrl = 'https://api.github.com/repos/ResonAtom/RepoReflect/commits';

  constructor(private http: HttpClient) {}

  getCommits() {
    return this.http.get(`${this.apiUrl}?per_page=100`);
  }

}
