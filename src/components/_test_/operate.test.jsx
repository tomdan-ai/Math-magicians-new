import operate from '../../logic/operate';

describe('Operate', () => {
  it('perform addition correctly', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8');
  });

  it('perform subtraction correctly', () => {
    const result = operate('10', '4', '-');
    expect(result).toBe('6');
  });

  it('perform multiplication correctly', () => {
    const result = operate('3', '7', 'x');
    expect(result).toBe('21');
  });

  it('perform division correctly', () => {
    const result = operate('7', '2', '÷');
    expect(result).toBe('3.5');
  });

  it('perform modulo correctly', () => {
    const result = operate('15', '6', '%');
    expect(result).toBe('3');
  });
});
