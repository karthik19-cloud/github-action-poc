const math = require("./sum");
 
describe('sum function', () => {
  it('sums up two integers', () => {
    expect(math.sum(1, 2)).toEqual(3);
  });
});
