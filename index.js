const select = document.getElementById('firstHalf');
const btn = document.getElementById('changeButton');
const select2 = document.getElementById('secondHalf');
const btn2 = document.getElementById('changeButton1');
const select3 = document.getElementById('thirdHalf');
const btn3 = document.getElementById('changeButton2');

/* Direct Color From Array */
const color = ['red','yellow','pink','gray','aqua','lime','orange','brown','black','green'];
let clr = 0;
btn.addEventListener('click',()=>{
    if(clr==color.length){
        clr = 0;
    }
    select.style.backgroundColor = `${color[clr]}`;
    btn.textContent = `${color[clr]}`
    clr++;
})

/* Color Of rgb value */
btn2.addEventListener('click',()=>{
select2.style.backgroundColor = `rgb(${Math.floor(255*Math.random(0,1))},${Math.floor(255*Math.random(0,1))},${Math.floor(255*Math.random(0,1))})`
btn2.textContent = `rgb(${Math.floor(255*Math.random())},${Math.floor(250*Math.random())},${Math.floor(255*Math.random())})`
})

/* Color of HEX value */
btn3.addEventListener('click',()=>{
    let colorHex ="#";
    let value = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for(let i = 0; i<6; i++){
        let index = Math.floor(Math.random()*value.length)
        colorHex+=value[index]
    }
    select3.style.backgroundColor = colorHex;
    btn3.textContent = colorHex;
})