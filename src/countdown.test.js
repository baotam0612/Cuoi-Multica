import { describe, expect, it } from 'vitest';
import { getCountdown } from './countdown.js';
describe('getCountdown', () => { it('calculates remaining units', () => { expect(getCountdown('2027-12-06T12:00:00+07:00', new Date('2027-12-05T12:00:00+07:00'))).toMatchObject({ days: 1, hours: 0, minutes: 0, seconds: 0, isComplete: false }); }); it('never returns negatives after the ceremony', () => { expect(getCountdown('2027-12-06T12:00:00+07:00', new Date('2027-12-07T12:00:00+07:00'))).toMatchObject({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true }); }); });
