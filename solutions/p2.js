// Problem 2: Add 2 integer arrays (of equal length)
// add 2 integer arrays (add elements)
var a = [1, 2, 3];
  var b = [4, 6, 8];
  
function sumOfArrays(a, b) {
    var result = [];
    // TODO: write a for loop that adds the elements of a and b.
    //       and pushes each sum into the result array.
    for(let i=0;i<a.length;i++)
    {
        result.push(a[i]+b[i]);
    }
    return result;
  }
  
  
  console.log("sum of arrays = " + sumOfArrays(a, b));
