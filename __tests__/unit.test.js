// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

describe('isPhoneNumber', () => {
  test('matches valid phone numbers', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('does not match invalid phone numbers', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
    expect(isPhoneNumber('123-45-6789')).toBe(false);
  });
});

describe('isEmail', () => {
  test('matches valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('user.name@domain.co.uk')).toBe(true);
  });
  test('does not match invalid email addresses', () => {
    expect(isEmail('testexample.com')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
  });
});  

describe('isStrongPassword', () => {
  test('matches valid strong passwords', () => {
    expect(isStrongPassword('Password1')).toBe(true);
    expect(isStrongPassword('Pass_word')).toBe(true);
  });
  test('does not match invalid strong passwords', () => {
    expect(isStrongPassword('Pass')).toBe(false);
    expect(isStrongPassword('ThisIsAVeryLongPassword')).toBe(false);
  }); 
});

describe('isDate', () => {
  test('matches valid dates', () => {
    expect(isDate('1/1/2020')).toBe(true);
    expect(isDate('12/31/2020')).toBe(true);
  });
  test('does not match invalid dates', () => {
    expect(isDate('2020/1/1')).toBe(false);
    expect(isDate('1-1-2020')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('matches valid hex colors', () => {
    expect(isHexColor('#FF0000')).toBe(true);
    expect(isHexColor('#00FF00')).toBe(true);
  });
  test('does not match invalid hex colors', () => {
    expect(isHexColor('FF0000')).toBe(false);
    expect(isHexColor('#GGGGGG')).toBe(false);
  });
});