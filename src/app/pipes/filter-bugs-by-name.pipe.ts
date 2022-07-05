import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBugsByName',
})
export class FilterBugsByNamePipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): any[] {
    return value.filter((bug) => bug.assignee == 'Mike');
  }
}
