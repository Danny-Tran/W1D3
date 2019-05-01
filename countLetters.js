// var output = process.argv[2]
function countLetter(str) {
  var obj = {}
  var splitString = str.replace(/\s/g, '')

for (var i = 0; i < splitString.length; i++) {
  if (!obj[splitString[i]]) {
  obj[splitString[i]] = 1
  } else {
    obj[splitString[i]] ++
  }
}return obj
}

console.log(countLetter("lighthouse in the house"))