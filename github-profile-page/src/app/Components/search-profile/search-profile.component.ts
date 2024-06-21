import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrl: './search-profile.component.scss'
})
export class SearchProfileComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  getProfile(profile: string): void {
    this._router.navigate([`/profile/${profile ? profile : 'Cherepahaz'}`]);
  }

}
