import { CountDownPipe } from './count-down.pipe';

describe('CountDownPipe', () => {
  it('create an instance', () => {
    const pipe = new CountDownPipe();
    expect(pipe).toBeTruthy();
  });
});
