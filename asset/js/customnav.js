
navanimation = ["permarotate2panel1","permarotate2panel2","permarotate2panel3","permarotate2panel4"]
document.querySelector('#body').addEventListener('click', (e) => {
if(e.target.classList.contains("navitem") == true){
    removeall()
    y = Array.from(document.querySelector('#navbar').getElementsByClassName('navitem')).indexOf(e.target);
    document.getElementById("animationtarget").classList.add(navanimation[y])
}
else if(e.target.classList.contains("squarebox") == true || e.target.classList.contains("innerbox") == true){}
else{
    removeall() 
}
  });

function removeall(item,index){
    document.getElementById("animationtarget").classList.remove("permarotate2panel1","permarotate2panel2","permarotate2panel4","permarotate2panel3")
}