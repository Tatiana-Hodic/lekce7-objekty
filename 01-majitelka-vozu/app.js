// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: 'Ford',
    barva: 'modra',
    rokVyroby: 2015,
    spz: '1B2 1234'
}

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Czechita';

// Přepiš značku na Škoda
auto['znacka'] = 'Skoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
const majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
document.querySelector('#majitelka').innerHTML = majitelka;

const znacka = auto.znacka;
document.querySelector('#znacka').innerHTML = znacka;

const spz = auto.spz;
document.querySelector('#spz').innerHTML = spz;