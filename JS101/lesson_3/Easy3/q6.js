let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// variables: arr, newArr, num, newNum, double, num
// primitive values: 1,2,3,0, num, newNum, num, num, 2
// objects: arr, newArr
