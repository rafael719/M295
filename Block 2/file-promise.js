const fs = require('node:fs');

function leseDateiInhalt(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Beispieldatei erstellen und testen
fs.writeFileSync('beispiel.txt', 'Dies ist ein Beispieltext für unseren Test.');

leseDateiInhalt('beispiel.txt')
  .then(inhalt => {
    console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });
