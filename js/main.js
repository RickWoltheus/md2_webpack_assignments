/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 <<<<<<< HEAD
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 =======
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 >>>>>>> BerendWeij/master
 */

var auto = "auto";
var auto1 = "auto1";
var auto2 = "auto2";
var auto3 = "auto3"
var auto4 = "auto4";

var cijferVoorEngels = "5";
var cijferVoorWiskunde = "9";
var cijferVoorDuits = "9";
var cijferVoorFop = "7";
var cijferVoorBerend = "6";

var faaalse = true;
var truth = false;
var niks = 0;
var iets = 1;


/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */


var teachers = ['Berend', 'Erwin', 'Ingrid'];
var students = ['Coen','Floris', 'Amin'];
var rooms = ['1.06','1.05','1.04'];

console.log(teachers.length);


/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */


var legeArray = [];
legeArray.push("Kiwi");

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

var eenArray = ['hoi','haollo','huis'];
eenArray.splice(2, 1);
console.log(eenArray);



/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */



let student1 = {
    naam : 'Quenten',
    leeftijd : '19',
    geslacht : 'man'
};

let student2 = {
    naam : 'Coen',
    leeftijd : '18',
    geslacht : 'man'
};
let student3 = {
    naam : 'Karahan',
    leeftijd : '17',
    geslacht : 'Nuhh'
};
let student4 = {
    naam : 'Remy',
    leeftijd : '18',
    geslacht : 'man'
};
let student5 = {
    naam : 'Floris',
    leeftijd : '19',
    geslacht : 'man'
};
let student6 = {
    naam : 'Rick',
    leeftijd : '21',
    geslacht : 'man'
};
let student7 = {
    naam : 'Stijn',
    leeftijd : '17',
    geslacht : 'man'
};
let student8 = {
    naam : 'viktor',
    leeftijd : '22',
    geslacht : 'genderfluid'
};
let student9 = {
    naam : 'job',
    leeftijd : '14',
    geslacht : 'man'
};
let student10 = {
    naam : 'angie',
    leeftijd : '18',
    geslacht : 'vrouw'
};

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */


function multiply() {
    console.log(value * multiplier)
}

function add() {
    console.log(value + value)
}

function aftrekken() {
    console.log(value - value)
}

function delen() {
    console.log (value / value)
}

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function mijnNaam(firstName, lastName)  {

}

mijnNaam("Coen", "Filipsen");
console.log();


/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

let student = {
    mymethod : function(name) { return name; }
}

let name = "rick";
student.mymethod(name);
/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */
let studenten =["coen", "sam", "rick", "Stijn", "victor", "karahan" , "Floris", "Ramy", "Quenten"]
for (students + 1; students < 8; students++);
/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */
var firstname = "rick";
var lastname = "woltheus";
var fullname = firstname + " " + lastname;
console.log(fullname);
/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */
console.log(Math.floor(Math.random()* 6));
console.log(Math.floor(Math.random()* 10 + 1));
console.log(Math.floor(Math.random()* 10 + 31));
console.log(Math.floor(Math.random()* 200 - 100));

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
    { array : false, object : false, primitive : true });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
    { array : true, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
    { array : true, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
    { array : false, object : true, primitive : false });


/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

let leeftijd = 19;
let nameStudent = "rick";
let geslacht = "twijfel";
let werk = "developer";

const paginas = 5;
const bladzijdes = 30;
const automerk = "bmw";
const editor = "intellij";
/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'Als je wil dat je hem later nog anders kan defineren');
console.log('Wanneer gebruik je de const keyword', 'Als je niet wilt dat die variabele kan veranderen van dattype');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */
let myFamily = [];
let ik = {
    naam : 'Rick',
    leeftijd : '19',
    lengte : '1.85',
    family : ['wouter', 'marina', 'chris']
};

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */
let namen = ["Saab", "Volvo", "BMW"];

console.log(namen.random());

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */
let text = "hallo ik ben rick.";

console.log(text.replaceAll("rick", "Dick"));
/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'Java script gebruikt Objecten ipv classes en daarom prototype language');


/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */
Array.prototype.truncate = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};
/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */