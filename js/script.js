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
    let cards = document.querySelector(".row");

    // controlliamo tutto l'array
    for (let i = 0; i < array.length; i++) {

        // aggiungiamo la card per ogni memnbro, con realtivo nome occupazione e foto
        cards.innerHTML += `<div class="card col p-0 rounded-0" style="width: 18rem;">
                                <img src="img/${array[i].foto}" class="" alt="${array[i].nome}">
                                <div class="card-body">
                                    <h5 class="card-title text-center">${array[i].nome}</h5>
                                    <p class="card-text text-center">${array[i].lavoro}</p>
                             </div>
                            </div>`

    }

};
