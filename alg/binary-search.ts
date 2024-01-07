function binary(list: number[], item: number) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const kick = list[mid];
    if (kick === item) return mid;
    if (kick > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const largeSortedArray = Array.from(
  { length: 100000000 },
  (_, index) => index + 1
);

console.time('binary 1');
console.log(binary(largeSortedArray, 100000000));
console.timeEnd('binary 1');
