function compareArrays(arr1, arr2) {
  let result;

  if(arr1.length === arr2.length) {
    result =   arr1.every((element, index) => arr2[index] === element );
  } else {
    result = false;
  }
  //console.log(result);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr
    .filter(element => element > 0 && element % 3 === 0)
    .map(elem => elem*10);

  return resultArr; // array
}
