var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
//  navBar (mobile)
if(sPage=="index.html")
{
  //slideshow

  let slideIndex = 0;
  showSlides();

  function showSlides() {
      console.log("kill me");
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
}
else if (sPage=="game.html")
{ 
  var down=document.getElementsByClassName("dropbtn");
  var bar=document.getElementsByClassName("myDropdown");
  for(var i=0;i<down.length;i++){
    ael(i);
  }
  function ael(i){
    console.log(bar);
    down[i].addEventListener("click", function (e) {
      bar[i].classList.toggle("show");
    });
  }
  //dropdown
  function dropdown(i) {
    
  }
  



  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

//nav bar
function myFunction() {
    console.log("help");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var menu=document.querySelector(".menu");
  menu.addEventListener("click",function(){myFunction()});


  function ani() {
    document.getElementById('volley_ball').style.animation="volleyball 2s infinite";
    console.log(document.getElementById('volley_ball'));
}

if(sPage=="players.html")
{
  var press=[];
  var square = document.querySelectorAll(".square1");
  var cardoverlay=document.querySelectorAll(".cardoverlay")
  for(var i=0; i < square.length; i++)
  {
    ael(i);
    press.push(0);
  }
  function ael(i){
    console.log(bar);
    square[i].addEventListener("click", function (e) {
      flip(i);
    });
  }
  function flip(i){
    if(press[i]==1)
    {
        cardoverlay[i].style.opacity=0;
        press[i]=0;
    }
    else if(press[i]==0){
      cardoverlay[i].style.opacity=1;
      press[i]=1;
    }
  }
}


