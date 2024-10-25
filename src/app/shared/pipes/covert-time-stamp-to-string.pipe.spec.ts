import { CovertTimeStampToStringPipe } from '../../../shared/pipes/covert-time-stamp-to-string.pipe';

describe('CovertTimeStampToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new CovertTimeStampToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
