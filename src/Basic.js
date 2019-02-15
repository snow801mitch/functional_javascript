// //Convert the following code from a for-loop to Array#map:

//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
    
//     module.exports = doubleAll



function doubleAll(numbers) {
  return numbers.map(function (num) {
    return num * 2;
  });
}

module.exports = doubleAll;