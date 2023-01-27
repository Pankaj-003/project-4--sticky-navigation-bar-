window.addEventListener('scroll', function(){
   let navbar=document.getElementById("navbar");
    if(window.pageYOffset >= 110){
        //   console.log("ok");
        navbar.classList.add('sticky');

    }
    else {
        navbar.classList.remove('sticky');
    }
});
// color change
function changeBG(color){
    document.body.style.backgroundColor=color;
    let p=document.getElementById("para");
    // console.log(para);

    if(color == "#000000"){
          

        p.style.color="white";
    }
   
    else{
      
            p.style.color="black";
    
}
}
// image slider
let flag=0;
function controller(x){
  flag=flag+x;
  slideshow(flag);
}

slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName('slide');
    if(num == slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let x of slides){
        x.style.display="none";

    }
    slides[num].style.display="block";
   
}