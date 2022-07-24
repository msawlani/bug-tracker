import { Component, Input, OnInit } from '@angular/core';
import { BugService } from 'src/app/service/bug.service';

@Component({
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.scss'],
})
export class BuglistComponent implements OnInit {
  bugList: any;

  constructor(private bug: BugService) {}

  ngOnInit() {
    this.bug.getBugs().subscribe((data) => (this.bugList = data));
  }
}
