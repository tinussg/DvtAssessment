import { ThousandformatterPipe } from './thousandformatter.pipe';

describe('ThousandformatterPipe', () => {
  it('create an instance', () => {
    const pipe = new ThousandformatterPipe();
    expect(pipe).toBeTruthy();
  });
});
