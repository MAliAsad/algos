// time complexity Big O(2^n)

function finbonaci(number) {
  if (number === 0 || number === 1) return number;

  return finbonaci(number - 1) + finbonaci(number - 2);
}

console.log("Finbonaci series: ", finbonaci(5));
