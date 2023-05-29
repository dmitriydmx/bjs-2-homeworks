function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min( ...arr);
  let max = Math.max( ...arr);
  let avg = [...arr].reduce(function(a, b) {
    return a + b;
  });
  avg = +(avg / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum =  [...arr].reduce(function(a, b) {
    return a + b;
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else (sumOddElement += arr[i])
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i =0; i <arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length;i++) {
    let middleResult = func(...arrOfArr[i]);
    if (middleResult > maxWorkerResult) {
      maxWorkerResult = middleResult;
    }
  }
  return maxWorkerResult;
}
