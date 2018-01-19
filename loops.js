function forLoop (array) {
  return for (var i = 0; i < 25; i++) {
    if i===1 console.log("I am 1 strange loop.");
    else i===0 console.log("I am ${+i+} strange loop.")
  }