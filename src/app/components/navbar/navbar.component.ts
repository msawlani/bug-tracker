import { Component, OnInit } from '@angular/core';
import { FilterBugsPipe } from 'src/app/pipes/filter-bugs.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  filterBugs: string = '';
  constructor(private pip: FilterBugsPipe) {}

  ngOnInit(): void {}
}
