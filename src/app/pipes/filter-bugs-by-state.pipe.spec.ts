import { FilterBugsByStatePipe } from './filter-bugs-by-state.pipe';

describe('FilterBugsByStatePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterBugsByStatePipe();
    expect(pipe).toBeTruthy();
  });
});
