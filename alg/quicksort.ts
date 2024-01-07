function quicksort(array: number[]): number[] {
  if (array.length < 2) return array;
  const pivot = array[0];
  const minors = array.slice(1).filter((value) => value <= pivot);
  const biggers = array.slice(1).filter((value) => value > pivot);
  return quicksort(minors).concat(pivot, quicksort(biggers));
}

console.time('Quicksort Time 1');
console.log(quicksort([]));
console.timeEnd('Quicksort Time 1');

console.time('Quicksort Time 2');
console.log(quicksort([5, 7, 2]));
console.timeEnd('Quicksort Time 2');

console.time('Quicksort Time 3');
console.log(quicksort([5, 7, 2, 4, 6]));
console.timeEnd('Quicksort Time 3');

console.time('Quicksort Time 4');
console.log(quicksort([5, 7, 2, 4, 6, 11, 1, -10]));
console.timeEnd('Quicksort Time 4');

console.time('Quicksort Time 5');
console.log(quicksort([5, 7, 2, 4, 6, 11, 1, -10, 400]));
console.timeEnd('Quicksort Time 5');
