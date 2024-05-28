
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];


squadre.forEach(squadra => {
    squadra.puntiFatti = getRandomInt(20, 100);
    squadra.falliSubiti = getRandomInt(10, 50);
});


let nomiEFalliSubiti = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));


console.log("Squadre complete:", squadre);
console.log("Nomi e falli subiti:", nomiEFalliSubiti);