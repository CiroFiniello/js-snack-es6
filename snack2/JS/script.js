// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// Buon pomeriggio e buon lavoro !!! :faccia_nerd:
// Questo è l'elenco degli studenti:
// Id  Name                Grades
// 213 Giuseppina della Rovere 78
// 110 Paola Cortellessa       96
// 250 Andrea Mantegna         48
// 145 Gaia Borromini          74
// 196 Luigi Grimaldello       68
// 102 Piero della Francesca   50
// 120 Francesca da Polenta    84
    
// }


const elencoStudenti = [
    {
        Id:213,
        Name: 'Giuseppina della Rovere',
        Grades: 78,
    },
    {
        Id:110,
        Name: 'Paola Cortellessa',
        Grades:96,
    },
    {
        Id:250,
        Name: 'Andrea Mantegna',
        Grades:48,
    },
    {
        Id: 145,
        Name: 'Gaia Borromini  ',
        Grades:74,
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades:68,
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades:50,
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta ',
        Grades:84,
    },
];


let studentiUppercase = elencoStudenti.map(studente => {
    return {
        studente,
        Name: studente.Name.trim().toUpperCase()
    };
});

console.log("Studenti con nomi in maiuscolo:", studentiUppercase);

// Filtrare gli studenti con voti superiori a 70

const studenti70plus = elencoStudenti.filter(studente => studente.Grades > 70);
console.log(studenti70plus);


// Filtrare gli studenti con voti superiori a 70 e con id superiore a 120
let studentiGradesMaggiori70eIdMaggioriDi120 = studenti70plus.filter(studente => studente.Id > 120 );
console.log(studentiGradesMaggiori70eIdMaggioriDi120);