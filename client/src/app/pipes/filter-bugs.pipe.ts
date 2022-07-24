import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBugs',
})
export class FilterBugsPipe implements PipeTransform {
  transform(bugList: any[], filterText: string) {
    if (bugList.length == 0 || filterText == '') {
      return bugList;
    } else {
      return bugList.find((bug) => {
        return bug == filterText;
      });
    }
  }
}
