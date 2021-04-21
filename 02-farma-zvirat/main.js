/* 
let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};
*/

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

let zvire = document.createElement('div');
zvire.className = 'zvire';


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
//2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

let fotoZvirete = document.createElement('img');
fotoZvirete.className = 'foto';
fotoZvirete.src = zvire.foto;

//2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

let jmenoZvirete = document.createElement('span');
jmenoZvirete.className = 'jmeno';
jmenoZvirete.innerHTML = zvire.jmeno;

//2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)
zvire.appendChild(fotoZvirete);
zvire.appendChild(jmenoZvirete);


// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

let farma = document.querySelector('.farma');
farma.appendChild(zvire);


// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?

    
const poleZvirat = [
    {jmeno: 'Kravicka', foto: 'obrazky/krava.jpg'},
    {jmeno: 'Ovecka', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'Husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'Kocka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'Kun', foto: 'obrazky/kun.jpg'},
    {jmeno: 'Pes', foto: 'obrazky/pes.jpg'}
];

for (let i = 0; i < poleZvirat.length; i++) {
    const zvire = document.createElement('div');
    zvire.classList.add('zvire');

    const foroZvirete = document.createElement('img');
    fotoZvirete.classList.add('foto');
    fotoZvirete.src = poleZvirat[i].foto;
    fotoZvirete.alt = poleZvirat[i].jmeno;

    const jmenoZvirete = document.createElement('div');
    jmenoZvirete.classList.add('jmeno');
    jmenoZvirete.textContent = poleZvirat[i].jmeno;

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    farma.appendChild(zvire);
}

/*
poleZvirat.forEach( function(zviratko) {
    const zvire = document.createElement('div');
    zvire.classList.add('zvire');

    const fotoZvirete = document.createElement('img');
    fotoZvirete.classList.add('foto');
    fotoZvirete.src = zviratko.foto;
    fotoZvirete.alt = zviratko.jmeno;

    const jmenoZvirete = document.createElement('div');
    jmenoZvirete.classList.add('jmeno');
    jmenoZvirete.textContent = zviratko.jmeno;

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    farma.appendChild(zvire);
});
*/
