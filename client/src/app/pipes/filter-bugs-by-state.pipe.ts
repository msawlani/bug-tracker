import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBugsByState',
})
export class FilterBugsByStatePipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): any[] {
    return value.filter((bug) => bug.state == 'To Do');
  }
}
