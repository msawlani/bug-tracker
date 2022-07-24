import { Component, Input, OnInit } from '@angular/core';
import { BugService } from 'src/app/service/bug.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  bugList: any;
  filterBugs: any;

  constructor(private Bug: BugService) {}

  ngOnInit() {
    this.Bug.getBugs().subscribe((data) => (this.bugList = data));
  }
}
