import { NullToZerroPipe } from './null-to-zerro.pipe';

describe('NullToZerroPipe', () => {
  it('create an instance', () => {
    const pipe = new NullToZerroPipe();
    expect(pipe).toBeTruthy();
  });
});
