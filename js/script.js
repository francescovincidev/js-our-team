let teamArray =[
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



allArray(teamArray);



function allArray(array){
    for(let i = 0; i < array.length; i++){
        for (const key in array[i]) {
            console.log(key, array[i][key]);
            
            }
        
     
     }

     

};
