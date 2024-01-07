function simple(list: number[], item: number) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) return i;
  }
  return null;
}

const largeSortedArray = Array.from(
  { length: 100000000 },
  (_, index) => index + 1
);

console.time('simple 1');
console.log(simple(largeSortedArray, 100000000));
console.timeEnd('simple 1');
