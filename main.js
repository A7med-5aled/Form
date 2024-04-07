const right=document.getElementById('right');
const left=document.getElementById('left');
const bttn=document.getElementById('bttn');
const bttnn=document.getElementById('bttnn');
bttn.addEventListener('click',function(){
    right.classList.add('active');
    left.classList.add('active');
})

bttnn.addEventListener('click',function(){
    right.classList.remove('active');
    left.classList.remove('active');
})
const ll=document.getElementById('l');
const rr=document.getElementById('r');
const om=document.getElementById('btn');
const upp=document.getElementById('upp');
om.addEventListener('click',function(){
    ll.classList.add('act');
    rr.classList.add('act');

})

upp.addEventListener('click',function(){
    ll.classList.remove('act');
    rr.classList.remove('act');

})

