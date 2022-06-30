import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { BugService } from 'src/app/service/bug.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss'],
})
export class CreateIssueComponent implements OnInit {
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

  constructor(private modalService: NgbModal, private bug: BugService) {}

  openModel(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {}

  handleSubmit(f: NgForm) {
    this.bugList.push(f.value);
    this.bug.addToList(this.bugList);
    this.modalService.dismissAll();
    console.log(f.value);
  }
}
