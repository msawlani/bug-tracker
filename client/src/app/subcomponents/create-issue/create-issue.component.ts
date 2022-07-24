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
  newBug: any;
  readonly url = 'http://localhost:5000';

  progress: any;

  constructor(private modalService: NgbModal, private bug: BugService) {}

  openModel(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {}
  // handles on submit in form and then posts the new bug to the backend
  handleSubmit(f: NgForm) {
    this.bug.createBug(f.value).subscribe((data) => console.log(data));
    window.location.reload();
  }
}
