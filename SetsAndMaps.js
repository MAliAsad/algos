// maps

console.log("set");

const set = new Set([1, 2, 3]);

set.add(4); // this will add
set.add(4); // this will not add because it is duplicate

set.delete(2);

console.log(set.size);
console.log(set.has(3));

set.forEach((e, i) => console.log(`${i} => ${e}`));

set.clear();

// maps

console.log("map");

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set(9, 3);
map.delete("a");

console.log(map.size);
console.log(map.get(9));

map.forEach((e, i) => console.log(`${i} => ${e}`));

map.clear();
