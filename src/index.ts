import { RecursiveArraySort, DataToSortedString } from './sort';
import { _RecursiveArraySort, _DataToSortedString } from './sort-hard';


console.log('--------ARR-------');

console.log(RecursiveArraySort([1, 2, 3, 'nus', 'gnus']));
console.log(RecursiveArraySort([2, 'nus', 3, 'gnus', 1]));
console.log(RecursiveArraySort([2, 'nus', [1, 2, 3, 'nus', [73247, 734, 'dqwd', 253]], 'gnus', 1]));

console.log('--------OBJ-------');

console.log(DataToSortedString({ a: '123', b: true, c: [1, 2, 3] }));
console.log(DataToSortedString({ b: true, c: [2, 3, 1], a: '123' }));
console.log(DataToSortedString({ b: true, c: [2, 3, 1], a: '123' }));

console.log('------OBJ-DEEP-----');

console.log(DataToSortedString({ a: '123', b: true, c: [1, 2, 3, 'nus', [73247, 734, 'dqwd', 253]] }));
console.log(DataToSortedString({ b: true, c: [[734, 'dqwd', 253, 73247], 'nus', 1, 3, 2], a: '123' }));




console.log('--------HARD-SORT-ARR-------');

console.log(_RecursiveArraySort([73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]));
console.log(_RecursiveArraySort([734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247]));

console.log('--------HARD-SORT-OBJ-------');

console.log(_DataToSortedString({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] }));
console.log(_DataToSortedString({ b: true, c: [[734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { a: '123', b: true, c: [1, 2, 3] }, a: '123' }));

console.log('--------THROW------');

console.log(DataToSortedString('gnus'));




// ------TRACE--------

/*
--------ARR-------
[ 1, 2, 3, 'gnus', 'nus' ]
[ 1, 2, 3, 'gnus', 'nus' ]
[ 1, [ 1, 2, [ 253, 73247, 734, 'dqwd' ], 3, 'nus' ], 2, 'gnus', 'nus' ]
--------OBJ-------
{"a":"123","b":true,"c":[1,2,3]}
{"a":"123","b":true,"c":[1,2,3]}
{"a":"123","b":true,"c":[1,2,3]}
------OBJ-DEEP-----
{"a":"123","b":true,"c":[1,2,[253,73247,734,"dqwd"],3,"nus"]}
{"a":"123","b":true,"c":[1,2,[253,73247,734,"dqwd"],3,"nus"]}
--------HARD-SORT-ARR-------
[ { a: '431', b: true, c: [ 55, 534, 'j' ] }, 253, 734, 73247, 'dqwd' ]
[ { a: '431', b: true, c: [ 55, 534, 'j' ] }, 253, 734, 73247, 'dqwd' ]
--------HARD-SORT-OBJ-------
{"a":"123","b":true,"c":[[{"a":"431","b":true,"c":[55,534,"j"]},253,734,73247,"dqwd"],1,2,3,"nus"],"d":{"a":"123","b":true,"c":[1,2,3]}}
{"a":"123","b":true,"c":[[{"a":"431","b":true,"c":[55,534,"j"]},253,734,73247,"dqwd"],1,2,3,"nus"],"d":{"a":"123","b":true,"c":[1,2,3]}}
--------THROW------
'data' must be an Array or Object 'string' given
*/