var coches = [
    ["seat","Codoba",1997,10000],
    ["Kia","Sorento",1994,1000],
    ["seat","Todelo",2000,10000],
    ["Fiat","Bravo",2010,10200],
    ["Fiat","500",2010,10000],
    ["Mercedes","Calse B",2001,39000],  
    ["seat","Ibiza",1993,10100],
    ["Alfa Romeo","Julieta",2002,10000],
    ["Alfa Romeo","159",2002,10400],
    ["Mercedes","Calse C",2001,1000],  
    ["Alfa Romeo","147",1990,10500],
    ["Fiat","Punto",1990,999],
    ["Citroen","Saxo",1980,10300],
    ["Renault","Superc 5",1980,12000],
    ["BWM","M3",2020,1000],
    ["Kia","Picanto",1990,1000],
    ["Alfa Romeo","spider",1970,14500],
    ["Mercedes","Calse A",1994,60100],  
    ["Mercedes","Calse D",2011,21221]  
];

//Devuelve los veiculos de la marca que no sea ni 'Alfa Romeo' ni 'Kia' que tenga mas de 20 años
//Funcion ordinaria 

function cochesAntiguos(marca){
   return coches.filter(function (car){
    const marca = car[0];
    const year = car[2];
    return marca !== 'Alfa Romeo' && marca !== 'Kia' && new Date().getFullYear - year > 20;

   });
}

//Funcion anonima
const cocheAntiguoanonima = function(){
    return coches.filter(function (car){
        return car[0] !== 'Alfa Romeo' && car[0] !== 'Kia' && new Date().getFullYear - car[2] > 20;
    });
};