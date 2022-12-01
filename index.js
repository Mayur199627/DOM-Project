const select = document.getElementById('firstHalf');
const btn = document.getElementById('changeButton');
const select2 = document.getElementById('secondHalf');
const btn2 = document.getElementById('changeButton1');

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
select2.style.backgroundColor = `rgb(${Math.floor(25*Math.random(0,1))},${Math.floor(255*Math.random(0,1))},${Math.floor(255*Math.random(0,1))})`
btn2.textContent = `rgb(${Math.floor(25*Math.random())},${Math.floor(250*Math.random())},${Math.floor(255*Math.random())})`
})