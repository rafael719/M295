let a = 1;
let b = 2;
let sum = 0;

while (a <= 4000000) {
  if (a % 2 === 0) {
    sum += a;
  }
  const next = a + b;
  a = b;
  b = next;
}

console.log("Summe der Zahlen ist:", sum);
