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