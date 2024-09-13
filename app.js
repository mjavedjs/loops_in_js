let value_show=document.querySelector("#value-show");
let Table_input=document.querySelector("#Userinput-1");

function Loops(){
    value_show.innerHTML = '';

    for(let i=1; i<=10; i++){
    let Tablevalue= Table_input.value;
    value_show.innerHTML +=`<div> ${Tablevalue} *  ${i}  = ${Tablevalue *  i} <div/>`;
    }
  
}

// / Nested Loop

for(let i=1; i<=10; i++){
    console.log("outer loop "+i);
 for(let j=1; j<=10; j++){
    // console.log("javed chcoah inner loop"+ j)
    console.log(`${j} * ${i} =  ${j * 1}`)
 }
}

