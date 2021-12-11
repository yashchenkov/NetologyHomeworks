// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;


  function allFuncStart(data) {
    getMax(data);
    getMin(data);
    getSum(data);
  }

  function getMax(data) {
    if(max === undefined) {
      max = data;
    } else {
      max = data > max ? data : max;
    }
  }

  function getMin(data) {
    if(min === undefined) { 
      min = data;
    } else {
      min = data < min ? data : min;
    }
  }

  function getSum(data) {
    if (sum === undefined) {
      sum = data;
    } else {
      sum += data;
    }
  }

  arr.forEach(element => allFuncStart(element));

  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  arr.forEach(element => {
    if(sum === undefined) {
      sum = element;
    } else {
      sum += element;
    }
  });

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  arrOfArr.forEach(arr => {
    if(max === undefined) {
      max = func(arr);
    } else {
      max = func(arr) > max ? func(arr) : max;
    }
  });
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max, min;

  arr.forEach(element => {
    if(max === undefined) {
      max = element;
    } else {
      max = element > max ? element : max;
    }
  });

  arr.forEach(element => {
    if(min === undefined) {
      min = element;
    } else {
      min = element < min ? element : min;
    }
  });

  console.log(max + " " + min);

  return Math.abs(max - min);


}
