loadHabits();

function addHabit(){
let h=document.getElementById('habit').value;
let arr=JSON.parse(localStorage.getItem('habits')||'[]');
arr.push({name:h,done:false});
localStorage.setItem('habits',JSON.stringify(arr));
loadHabits();
}

function toggle(i){
let arr=JSON.parse(localStorage.getItem('habits'));
arr[i].done=!arr[i].done;
localStorage.setItem('habits',JSON.stringify(arr));
loadHabits();
}

function loadHabits(){
let arr=JSON.parse(localStorage.getItem('habits')||'[]');
let html='';
arr.forEach((h,i)=>{
html+=`<p onclick="toggle(${i})">${h.done?'✅':'⬜'} ${h.name}</p>`;
});
document.getElementById('habits').innerHTML=html;
}
