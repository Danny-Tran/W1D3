function countLetter(str) {
  var obj = {}
  var splitString = str

for (var i = 0; i < str.length; i++) {
  if (!obj[splitString[i]]) {
  obj[splitString[i]] = [i];
  }
  else if (splitString.charAt(i) === splitString[i]) {
        obj[splitString[i]].push(i)
  }
  }
  return obj;
}



console.log(countLetter("lighthouse in the house"))