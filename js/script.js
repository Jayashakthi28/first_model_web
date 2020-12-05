const toggle=document.querySelector('.toggle span');
const nav=document.querySelector('.nav');
toggle.onclick=()=>{
    nav.classList.toggle('collapse');
}