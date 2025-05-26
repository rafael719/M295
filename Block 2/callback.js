function verdoppeln(zahl, callback) {
  const ergebnis = zahl * 2;
  callback(ergebnis);
}

// Test der Funktion
verdoppeln(5, function(ergebnis) {
  console.log('Das Ergebnis ist:', ergebnis);
});
