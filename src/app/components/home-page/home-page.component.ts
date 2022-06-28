import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BugService } from 'src/app/service/bug.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  bugList: any;

  constructor(private httpClient: HttpClient, private bug: BugService) {}

  ngOnInit() {
    this.bug.bug.subscribe((bug) => (this.bugList = bug));
  }
}
