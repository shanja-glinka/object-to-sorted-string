import { DataToSortedString } from './sort';
import { SortObject } from './SortObject';


console.log('--------OBJ-DEEP-------');

console.log(DataToSortedString({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] }));
console.log(DataToSortedString({ b: true, c: [[734, 'dqwd', { b: true, a: '431', c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { b: true, a: '123', f: '845', c: [1, 2, 3] }, a: '123' }));


const sortObject = new SortObject();
const sortObjectCompare = new SortObject(true);


console.log('--------CLASS-OBJ-------');

console.log(sortObject.toString(sortObject.sort({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] })));
console.log(sortObject.toString(sortObject.sort({ b: true, c: [[734, 'dqwd', { a: '431', b: true, c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { a: '123', b: true, c: [1, 2, 3] }, a: '123' })));

console.log(sortObjectCompare.toString(sortObjectCompare.sort({ a: '123', b: true, d: { a: '123', b: true, c: [1, 2, 3] }, c: [1, 2, 3, 'nus', [73247, { a: '431', b: true, c: [55, 534, 'j'] }, 734, 'dqwd', 253]] })));
console.log(sortObjectCompare.toString(sortObjectCompare.sort({ b: true, c: [['dqwd', 734, { b: true, a: '431', c: [55, 534, 'j'] }, 253, 73247], 'nus', 1, 3, 2], d: { b: true, a: '123', f: '845', c: [1, 2, 3] }, a: '123' })));
