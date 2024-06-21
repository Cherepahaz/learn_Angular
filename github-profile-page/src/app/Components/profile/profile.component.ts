import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubAPIService } from '../../Services/github-api.service';

import { MOCK_PROFILE } from '../../mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent implements OnInit {
  pickSubscribe: boolean = false;
  username!: string;
  userProfile: any = {};
  lenObj: number = 0;

  constructor(
    private route: ActivatedRoute,
    private gitHubAPI: GithubAPIService
  ) { }

  ngOnInit(): void {
    this.getUser();
    //this.userProfile = MOCK_PROFILE; //Заглушка.
  }

  getUser() {
    const username = this.route.params
      .subscribe(params => {
        this.username = params['username'];
        this.gitHubAPI.getUser(this.username)
          .subscribe(
            data => {
              this.userProfile = data;
              this.lenObj = Object.keys(this.userProfile).length
            },
            error => {
              this.userProfile = [];
              this.lenObj = Object.keys(this.userProfile).length
            },
          )
      });
  }

  openProfile() {
    window.open(this.userProfile.html_url, '_blank')?.focus;
  }

}
