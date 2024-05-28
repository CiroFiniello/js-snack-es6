const biciclette = [
    { nome: 'Bianchi Oltre XR4', peso: 6.8 },
    { nome: 'Cannondale SuperSix EVO', peso: 7.0 },
    { nome: 'Specialized S-Works Tarmac', peso: 6.6 },
    { nome: 'Trek Emonda SLR', peso: 6.7 },
    { nome: 'Pinarello Dogma F12', peso: 7.1 }
];

let biciLeggera = biciclette[0];

for (const bici of biciclette) {
    if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
    }
}


const { nome, peso } = biciLeggera;
console.log(`La bici più leggera è la ${nome} con un peso di ${peso} kg.`);