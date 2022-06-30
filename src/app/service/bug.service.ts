import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BugService {
  private bugList = new BehaviorSubject<
    Array<{
      project: string;
      type: string;
      assignee: string;
      reporter: string;
      state: string;
      priority: string;
      summary: string;
      description: string;
      date: string;
    }>
  >([]);

  bug = this.bugList.asObservable();

  constructor() {}

  addToList(bug: any) {
    console.log(bug);

    this.bugList.next(bug);
  }
}
