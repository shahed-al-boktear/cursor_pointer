let ver = document.querySelector('.shahed');
let cursor= document.getElementById('cursor');
let cursor2= document.getElementById('cursor2');

ver.addEventListener('mousemove' , (event)=>{
    let x= event.clientX;
    let y= event.clientY;
    cursor.style.top=cursor2.style.top=`${y}px`;
    cursor.style.left=cursor2.style.left= `${x}px`;
});
