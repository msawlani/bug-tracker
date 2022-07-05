import { FilterBugsByNamePipe } from './filter-bugs-by-name.pipe';

describe('FilterBugsByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterBugsByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
