import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BugService {
  private bugList = new BehaviorSubject<
    Array<{
      type: string;
      assignee: string;
      reporter: string;
      summary: string;
    }>
  >([]);
  bug = this.bugList.asObservable();

  constructor() {}

  addToList(bug: any) {
    console.log(bug);

    this.bugList.next(bug);
  }
}
