//map
var visible = false;
function showMap(){
    if(visible){
        document.getElementById('map').style.display = 'none';
        document.getElementById('background').style.display='none'
        
        visible = true;
    } else{
        document.getElementById('map').style.display = 'flex';
        document.getElementById('background').style.display='block'
        visible = false;
    }
}
function hideMap(){
    document.getElementById('map').style.display = 'none';
    document.getElementById('background').style.display='none';
}
//foto
let btn_left = document.getElementById('arrow-left');
let btn_right = document.getElementById('arrow-right');
let images = document.querySelectorAll('#gallery .photos img');
let imagessmall = document.querySelectorAll('.photos-small img')
let i = 0;
btn_right.onclick=function(){
    images[i].style.display = 'none';
    imagessmall[i].style.border = 'none';
    i++ ;
    if(i >= images.length){
        i = 0;
    }
    images[i].style.display = 'block';
    imagessmall[i].style.border = '3px solid #2BBB97';
}
btn_left.onclick = function(){
    images[i].style.display = 'none';
    imagessmall[i].style.border = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
    imagessmall[i].style.border = '3px solid #2BBB97';
}


function showFoto(){
    if(visible){
        document.getElementById('gallery').style.display = 'none';
        document.getElementById('background').style.display='none'
        
        visible = true;
    } else{
        document.getElementById('gallery').style.display = 'block'
        document.getElementById('background').style.display='block'
        visible = false;
    }
}
function hideFoto(){
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('background').style.display='none';
}
//burger menu

function Menu(){
    let x = document.getElementById('burger-menu');

    if (x.style.display === "flex") {
        x.style.display = "none";

      } else {
        x.style.display = "flex";
      }
}

// contacts numbers

function Contact(){
    let y = document.getElementById('contact-numbers');
    if (y.style.display === "flex") {
        y.style.display = "none";

      } else {
        y.style.display = "flex";
      }
}
