// contour

let myBody = document.querySelector('body');

let squeDiv = document.createElement("div");
squeDiv.className = 'squelette'
myBody.appendChild(squeDiv)


// // ecran

let ecranDiv = document.createElement('input')
ecranDiv.className = 'ecran'
squeDiv.appendChild(ecranDiv)


// container

let myContainer = document.createElement("div");
myContainer.className = 'container';
squeDiv.appendChild(myContainer);
myContainer.appendChild(ecranDiv);

// les rangs

let rang1 = document.createElement('div')
rang1.className = 'rang'
squeDiv.appendChild(rang1);
let rang2 = document.createElement('div')
rang2.className = 'rang'
squeDiv.appendChild(rang2);
let rang3 = document.createElement('div')
rang3.className = 'rang'
squeDiv.appendChild(rang3);
let rang4 = document.createElement('div')
rang4.className = 'rang'
squeDiv.appendChild(rang4);

// les boutons

let mybtn0 = document.createElement("button");
mybtn0.textContent = "0"
let mybtn1 = document.createElement("button");
mybtn1.textContent = "1"
let mybtn2 = document.createElement("button");
mybtn2.textContent = "2"
let mybtn3 = document.createElement("button");
mybtn3.textContent = "3"
let mybtn4 = document.createElement("button");
mybtn4.textContent = "4"
let mybtn5 = document.createElement("button");
mybtn5.textContent = "5"
let mybtn6 = document.createElement("button");
mybtn6.textContent = "6"
let mybtn7 = document.createElement("button");
mybtn7.textContent = "7"
let mybtn8 = document.createElement("button");
mybtn8.textContent = "8"
let mybtn9 = document.createElement("button");
mybtn9.textContent = "9"

// les operateurs

let myPlus = document.createElement("button");
myPlus.textContent="+"
let myMoins = document.createElement("button");
myMoins.textContent="-"
let myD = document.createElement("button");
myD.textContent = "/"
let myX = document.createElement("button");
myX.textContent = "*"
let mySupp = document.createElement("button");
mySupp.textContent="C"
let myEga =document.createElement("button")
myEga.textContent="="

// rang 1

mybtn1.className = 'col-4';
rang1 .appendChild(mybtn1);

mybtn2.className = 'col-4';
rang1 .appendChild(mybtn2);

mybtn3.className = 'col-4';
rang1.appendChild(mybtn3);

myPlus.className = 'col-4';
rang1.appendChild(myPlus);

// rang 2

mybtn4.className = 'col-4';
rang2 .appendChild(mybtn4);

mybtn5.className = 'col-4';
rang2.appendChild(mybtn5);

mybtn6.className = 'col-4';
rang2.appendChild(mybtn6);


myMoins.className = 'col-4';
rang2.appendChild(myMoins);


// rang 3

mybtn7.className = 'col-4';
rang3 .appendChild(mybtn7);

mybtn8.className = 'col-4';
rang3.appendChild(mybtn8);


mybtn9.className = 'col-4';
rang3.appendChild(mybtn9);

myD.className = 'col-4';
rang3.appendChild(myD);

//  rang 5

mySupp.className = 'col-4';
rang4 .appendChild(mySupp);

mybtn0.className = 'col-4';
rang4.appendChild(mybtn0);

myEga.className = 'col-4';
rang4.appendChild(myEga);

myX.className = 'col-4';
rang4.appendChild(myX);


