!function(){window.addEventListener("load",function(){function e(){return event.clientX}function t(){return event.clientY}function n(n){var i=n.querySelector(".ripple");n.blur(),x=e(),y=t();var o=n.getBoundingClientRect();i.style.top=y-o.top+"px",i.style.left=x-o.left+"px",i.style.animation="ripple .9s",setTimeout(function(){i.style.top="0px",i.style.left="0px",i.style.animation="none"},900)}var i=document.getElementsByTagName("body")[0];i.addEventListener("mousedown",function(e){e.srcElement?element=e.srcElement:e.target&&(element=e.target),"BUTTON"==element.tagName&&element.addEventListener("click",function(){element.querySelector(".ripple")?n(element):setTimeout(function(){element.blur()},400)})})})}();