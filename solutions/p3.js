// Problem 3
var a = [1, 2, 3];
var b = [2, 3, 4, 5, 6];

function sumOfArrays(a, b) {
    var result = [];
    var index;
    // TODO: write a for loop that adds the elements of a and b.
    //       and pushes each sum into the result array.
    if(a.length<b.length){
        index = b.length;
    }
    else{
        index = a.length;
    }
    for(let i=0;i<index;i++)
    {
       if(a[i]== undefined)
       {
         result.push(b[i]);
       }
       else{
        result.push(a[i]+b[i]);
       }
        
    }
    return result;
  }
  console.log("sum of arrays = " + sumOfArrays(a, b));