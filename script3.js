const chk = document.getElementById('chk')
const carlos = document.getElementById('carlos')


chk.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    carlos.classList.toggle("changeBorder");


})


