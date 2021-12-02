import add from './add'

describe('describe me', () => {
  it('test me', () => {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});
