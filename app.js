import * as R from 'ramda';
import sum from './util';

const arr1 = [1,2,3,4,5,6];
const arr2 = [1,2,3,4,7,8];
const arr3 = R.union(arr1, arr2);

console.log(arr3);
console.log(sum(8,8));