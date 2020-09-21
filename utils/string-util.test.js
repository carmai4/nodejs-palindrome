"use strict";
const util = require('./string-util');

test('backwards returns string backwards', () => {
  expect(util.backwards('aaa')).toBe('aaa');
  expect(util.backwards('abc')).toBe('cba');
  expect(util.backwards('eGxSdxCfs')).toBe('sfCxdSxGe');
});

test('stringsAreSame returns true or false as expected', () => {
  const someStrings = [
    'aseibndslfk',
    'RnfdxclkERdfRGSDFE',
    'hello',
    'world',
    '45234dsk34jf',
    '87dSDd83kdSdfa'
  ];
  const random1 = Math.floor(Math.random() * 9999) % 6;
  const random2 = Math.floor(Date.now()) % 6;

  const str1 = someStrings[random1];
  const str2 = someStrings[random2];

  expect(util.stringsAreSame(str1, someStrings[0])).toBe(str1 === someStrings[0]);
  expect(util.stringsAreSame(str1, someStrings[1])).toBe(str1 === someStrings[1]);
  expect(util.stringsAreSame(str2, someStrings[2])).toBe(str2 === someStrings[2]);
  expect(util.stringsAreSame(str2, someStrings[3])).toBe(str2 === someStrings[3]);
  expect(util.stringsAreSame(str1, someStrings[4])).toBe(str1 === someStrings[4]);
  expect(util.stringsAreSame(str2, someStrings[5])).toBe(str2 === someStrings[5]);
  expect(util.stringsAreSame(someStrings[0], someStrings[0])).toBeTruthy();
  expect(util.stringsAreSame(someStrings[0], someStrings[1])).toBeFalsy();
  expect(util.stringsAreSame(someStrings[0], someStrings[2])).toBeFalsy();
  expect(util.stringsAreSame(someStrings[0], someStrings[3])).toBeFalsy();
  expect(util.stringsAreSame(someStrings[0], someStrings[4])).toBeFalsy();
  expect(util.stringsAreSame(someStrings[0], someStrings[5])).toBeFalsy();
});
