// Array con tutti i memebri
let teamArray = [
    {
        nome: "Wayne Barnett",
        lavoro: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        lavoro: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        lavoro: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        lavoro: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        lavoro: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        lavoro: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];


// usiamo l'array nella funzione
allArray(teamArray);



/**
 * Description
 * @param {array} array
 * @returns {any}
 */
function allArray(array) {

    // selezioniamo ul
    let list = document.querySelector("ul");

    // controlliamo tutto l'array
    for (let i = 0; i < array.length; i++) {
        // per ogni elemento dell'array creiamo un li memebro i
        list.innerHTML += `<li>membro ${i+1}</li>`

        // per ogni oggetto stampiamo tutte le key con il relativo contenuto
        for (const key in array[i]) {
            console.log(key, array[i][key]);
            list.innerHTML += `<li>${key}: ${array[i][key]}</li>`
        }

        // aggiungiamo spazio per ogni oggetto stampato
        list.innerHTML +=`<br>`
    }

};
