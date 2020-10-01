// contour

let myBody = document.querySelector('body');
let squeDiv = document.createElement("div");
squeDiv.className = 'squelette'
myBody.appendChild(squeDiv)


// // ecran

let ecranDiv = document.createElement('input')

ecranDiv.className = 'ecran'
// ecranDiv.setAttribute('type',"number")
console.log(ecranDiv);
squeDiv.appendChild(ecranDiv)

let ecranDiv1 = document.createElement('input')
console.log(ecranDiv1);
ecranDiv1.className = 'ecran1'
// ecranDiv1.setAttribute('type',"number")
squeDiv.appendChild(ecranDiv1)

let ecranDiv2 = document.createElement('input')
console.log(ecranDiv2);
ecranDiv2.className = 'ecran2'
// ecranDiv2.setAttribute('type',"number")
squeDiv.appendChild(ecranDiv2)


// container

let myContainer = document.createElement("div");
myContainer.className = 'container';
squeDiv.appendChild(myContainer);
myContainer.appendChild(ecranDiv);
myContainer.appendChild(ecranDiv1);
myContainer.appendChild(ecranDiv2);



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

let tabOpe= [myPlus,myMoins,myD,myX,mySupp]

// rang 1

mybtn1.className = 'col-4';
rang1 .appendChild(mybtn1);

mybtn2.className = 'col-4';
rang1 .appendChild(mybtn2);

mybtn3.className = 'col-4';
rang1.appendChild(mybtn3);

myPlus.className = 'colo-4';
rang1.appendChild(myPlus);

// rang 2

mybtn4.className = 'col-4';
rang2 .appendChild(mybtn4);

mybtn5.className = 'col-4';
rang2.appendChild(mybtn5);

mybtn6.className = 'col-4';
rang2.appendChild(mybtn6);


myMoins.className = 'colo-4';
rang2.appendChild(myMoins);


// rang 3

mybtn7.className = 'col-4';
rang3 .appendChild(mybtn7);

mybtn8.className = 'col-4';
rang3.appendChild(mybtn8);


mybtn9.className = 'col-4';
rang3.appendChild(mybtn9);

myD.className = 'colo-4';
rang3.appendChild(myD);

//  rang 5

mySupp.className = 'colc-4';
rang4 .appendChild(mySupp);

mybtn0.className = 'col-4';
rang4.appendChild(mybtn0);

myEga.className = 'cole-4';
rang4.appendChild(myEga);

myX.className = 'colo-4';
rang4.appendChild(myX);

// mon tableau 

let tabNum = [mybtn0,mybtn1,mybtn2,mybtn3,mybtn4,mybtn5,mybtn6,mybtn7,mybtn8,mybtn9]


// l'operation


let choix;

ecranDiv.addEventListener('click',()=>{
    choix = true
    console.log(choix);
})
ecranDiv1.addEventListener('click',()=>{
    choix = true
    console.log(choix);
})
ecranDiv2.addEventListener('click',()=>{
    choix = true
    console.log(choix);
})

tabOpe.forEach(elem => {
    elem.addEventListener('click',()=>{
        ecranDiv1.value += elem.innerText
        console.log(ecranDiv1.innerText);
        choix = false
        console.log(choix);
    })
});

tabNum.forEach(element => {
    element.addEventListener('click',()=>{
        if (choix) {
            ecranDiv.value += element.innerText
            ecranDiv.textContent += element.innerText
            console.log(ecranDiv.innerText);
                
        } else{
            ecranDiv2.value += element.innerText
            ecranDiv2.textContent += element.innerText
            console.log(ecranDiv2.innerText);
        }
    })
});


let resultat;

myEga.addEventListener('click',()=>{
    if(ecranDiv1.value=="+"){
        resultat= parseInt(ecranDiv.value)+parseInt(ecranDiv2.value)
        ecranDiv2.value=""
        ecranDiv1.value=""
        ecranDiv.value= resultat
    } else if(ecranDiv1.value=="-"){
        resultat= parseInt(ecranDiv.value)-parseInt(ecranDiv2.value)
        ecranDiv2.value=""
        ecranDiv1.value=""
        ecranDiv.value= resultat
    } else if(ecranDiv1.value=="/"){
        resultat= parseInt(ecranDiv.value)/parseInt(ecranDiv2.value)
        ecranDiv2.value=""
        ecranDiv1.value=""
        ecranDiv.value= resultat
    } else if(ecranDiv1.value=="*"){
        resultat= parseInt(ecranDiv.value)*parseInt(ecranDiv2.value)
        ecranDiv2.value=""
        ecranDiv1.value=""
        ecranDiv.value= resultat
    }
})

mySupp.addEventListener('click',()=>{
    ecranDiv2.value=""
    ecranDiv1.value=""
    ecranDiv.value=""
})
