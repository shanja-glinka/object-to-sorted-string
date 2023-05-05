import { RecursiveArraySort, DataToSortedString } from './sort';
import { SortObject } from './class.sort';



console.log('--------ARR-------');

console.log(RecursiveArraySort([73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]));
console.log(RecursiveArraySort([734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247]));

console.log('--------OBJ-------');

console.log(DataToSortedString({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] }));
console.log(DataToSortedString({ b: true, c: [[734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { a: '123', b: true, c: [1, 2, 3] }, a: '123' }));

console.log('------OBJ-DEEP-----');

console.log(DataToSortedString({ a: '123', b: true, c: [1, 2, 3, 'nus', [73247, 734, 'dqwd', 253]] }));
console.log(DataToSortedString({ b: true, c: [[734, 'dqwd', 253, 73247], 'nus', 1, 3, 2], a: '123' }));



// console.log('--------THROW------');
// console.log(DataToSortedString('gnus'));



const sortObject = new SortObject();
const sortObjectCompare = new SortObject(true);


console.log('--------CLASS-ARR-------');

console.log(sortObject.sortArray([73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]));
console.log(sortObject.sortArray([734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247]));
console.log(sortObjectCompare.sortArray([73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]));
console.log(sortObjectCompare.sortArray([734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247]));


console.log('--------CLASS-OBJ-------');

console.log(sortObject.toString(sortObject.sort({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] })));
console.log(sortObject.toString(sortObject.sort({ b: true, c: [[734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { a: '123', b: true, c: [1, 2, 3] }, a: '123' })));

console.log(sortObjectCompare.toString(sortObjectCompare.sort({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] })));
console.log(sortObjectCompare.toString(sortObjectCompare.sort({ b: true, c: [[734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { a: '123', b: true, c: [1, 2, 3] }, a: '123' })));
