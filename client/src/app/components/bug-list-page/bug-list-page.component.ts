import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bug-list-page',
  templateUrl: './bug-list-page.component.html',
  styleUrls: ['./bug-list-page.component.scss'],
})
export class BugListPageComponent implements OnInit {
  bugList: Array<{
    project: string;
    type: string;
    assignee: string;
    reporter: string;
    state: string;
    priority: string;
    summary: string;
    description: string;
    date: string;
  }> = [];

  parentList = [];

  progress: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModel(content: any) {
    this.modalService.open(content);
  }

  handleSubmit(f: NgForm) {
    this.bugList.push(f.value);
    this.modalService.dismissAll();
    console.log(this.bugList);
  }
}
