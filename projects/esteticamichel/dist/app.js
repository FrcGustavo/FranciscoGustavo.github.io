function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:19.3913425,lng:-99.0939677},zoom:19})}var map;!function(){window.addEventListener("load",function(){body=document.getElementsByTagName("body")[0],header=document.getElementsByTagName("header")[0],welcome=document.querySelector(".welcome"),servicesHome=document.querySelector(".services"),offersHome=document.querySelector(".offers"),titulo=document.querySelector(".title"),texto=document.querySelector(".text"),logo=document.querySelector(".logo"),buttonDown=document.querySelector(".button-down"),offers=document.getElementsByClassName("offer"),services=document.getElementsByClassName("service"),ejecutamas=!0,lista=document.querySelectorAll("li"),buttonDown.addEventListener("click",function(e){e.preventDefault(),body.scrollTop=welcome.offsetHeight-50}),window.addEventListener("scroll",function(){console.log("Haciendo scroll"),body.scrollTop>welcome.offsetHeight-51&&1==ejecutamas?(console.log("GGGG"),header.style.height="50px",ejecutamas=!1):body.scrollTop<welcome.offsetHeight-51&&0==ejecutamas&&(header.style.height="0px",ejecutamas=!0),body.scrollTop>welcome.offsetHeight+servicesHome.offsetHeight-51?(console.log("Elemento Li"),lista[0].style.display="none",lista[1].style.display="flex"):(lista[1].style.display="none",lista[0].style.display="flex"),body.scrollTop>welcome.offsetHeight+servicesHome.offsetHeight+offersHome.offsetHeight-51?(console.log("Elemento Li"),lista[1].style.display="none",lista[2].style.display="flex"):(lista[2].style.display="none",lista[1].style.display="flex")}),titulo.className=titulo.className+" slide-botton",texto.className=texto.className+" slide-right",logo.className=logo.className+" opacity-1",buttonDown.className=buttonDown.className+" opacity-1";for(var e=0;e<services.length;e++)services[e].className=services[e].className+" opacity-1";for(var e=0;e<offers.length;e++)offers[e].className=offers[e].className+" opacity-1";if(document.getElementsByTagName("body")[0].offsetWidth<1280){packages=document.getElementsByClassName("package");var t=0,o=1,a=2,s=0;setInterval(function(){console.log("Hola"),0==s&&(t=0,o=1,a=2),1==s&&(t=1,o=2,a=0),2==s&&(t=2,o=0,a=1),packages[t].style.left="-100%",packages[t].style.opacity="0",packages[t].style.zIndex="0",packages[o].style.opacity="1",packages[o].style.left="50%",packages[o].style.transform="translateX(-50%)",packages[o].style.zIndex="100",packages[a].style.left="100%",packages[a].style.opacity="0",packages[a].style.zIndex="0",3==s?s=0:s++},7e3)}})}();