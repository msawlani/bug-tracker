import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BugModel {}

export class BugModelItem {
  BugName: string | undefined;
  Description: string | undefined;
  Status: string = 'Open';
  SeverityLevel: string | undefined;
  isOpen: Boolean = false;
}
