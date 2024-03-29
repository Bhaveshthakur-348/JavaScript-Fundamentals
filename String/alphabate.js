let str = 'hfjsk6485lop';
// alphabet should be displayed first and numbers should be displayed at end in ascending order
// output = [
//   'f', 'h', 'j', 'k', 'l',
//   'o', 'p', 's', 4,   5,
//   6,   8
// ]
const data = [...str].sort();

const tt = data.filter((ele) => isNaN(ele)).sort((a, b) => (a > b ? -1 : 1));
const rr = data.filter((ele) => !isNaN(ele)).sort();

console.log([...tt, ...rr]);