let value_show=document.querySelector("#value-show");
let Table_input=document.querySelector("#Userinput-1");

function Loops(){
    value_show.innerHTML = '';
    for(let i=1; i<=10; i++){
    let Tablevalue= Table_input.value;
     "<p>he Table Generater <p/>"
    value_show.innerHTML +=` ${Tablevalue} * ${i} = ${Tablevalue *i} <br/> `;
    }
  
}

