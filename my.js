const home =()=>{
    location.assign("index.html");
}

const play =()=>{
    location.assign("play.html");
}

let t = document.getElementById('text');
let b = document.getElementById('btn');
let c_btn = document.getElementById('c-btn');
let l_btn = document.getElementById('l-btn');
let copy = document.getElementById('copy');
let f_btn = document.getElementById('f-btn');
var to = document.getElementById('text-out');
let count = document.getElementById('count');
let val = t.value;

b.addEventListener('click',function display(){
    
    // console.log(typeof(t.value));
    let s=val.toUpperCase();
    // console.log(s);  
    // to.innerHTML = "";   
    to.value = s;

})
l_btn.addEventListener('click', ()=>{
    
    // console.log(typeof(t.value));
    let s=val.toLowerCase();
    // console.log(s);    
    to.value = s;

})

c_btn.addEventListener('click',()=>{
    to.value="";
    t.value="";
})
copy.addEventListener('click',()=>{
    let txt = document.querySelector('.text');
    txt.select();
    document.execCommand('copy');
})
f_btn.addEventListener('click',()=>{
    
    let str = val.split('.').map((ele)=>{
      return  ele[0].toUpperCase()+ele.slice(1).toLowerCase();
    })
    let Newstr = str.toString();
    to.value=Newstr.replace(/,/g,".");
    // console.log(Newstr.replace(/,/g,".").length);

})

count.addEventListener('click',()=>{
    let l = val.length;
    let m=val.trim();
    let word = m.split(" ");
    // console.log(word.length);

document.querySelector('.display').innerHTML=`<h3>The character: ${l}</h3>`;
document.querySelector('.dl').innerHTML=`<h3>The words : ${word.length} </h3>`;
})