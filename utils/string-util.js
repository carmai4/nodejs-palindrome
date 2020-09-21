function backwards(str) {
  if (!str) {
    return undefined;
  }

  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

function stringsAreSame(str1, str2) {
  if (typeof(str1) !== 'string') {
    return false;
  }
  if (typeof(str2) !== 'string') {
    return false;
  }
  return str1 === str2;
}

module.exports = {
  backwards,
  stringsAreSame
};
