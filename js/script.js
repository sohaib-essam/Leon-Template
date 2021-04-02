const toggleIcon = document.querySelector(".header .links .icon");

toggleIcon.onclick = function() {

  if(document.querySelector(".header .links ul").className == "") {

    document.querySelector(".header .links ul").className = "show";

  } else {

    document.querySelector(".header .links ul").className = "";

  }

}