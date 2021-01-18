import sum from './sum.js';
 
describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe("Testing our nodeJS app", () => {
  it("Testing using Github Actions", () => {
    expect(2).toBe(2);
  });
});


