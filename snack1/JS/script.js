const tavoloVip = [ 
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];

let objectarray = tavoloVip.map(item => ({
    tableName: tavoloVip, 
    guestName: item,
    place: item.length,
}));

for (let index = 0; index < objectarray.length; index++) {
    console.log(objectarray[index]);
    
}
