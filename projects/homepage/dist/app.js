!function(){window.addEventListener("load",function(){function e(e,n){e.style.width="100%",e.style.padding="20px",e.className="sign_up",n.style.width="0",n.style.padding="0",n.style.overflow="hidden"}var n=document.getElementsByTagName("body")[0];n.addEventListener("mousedown",function(n){n.srcElement?element=n.srcElement:n.target&&(element=n.target),"signUp inactive"==element.className?(console.log("HOLA"),e(sign_up,sign_in),signIn.className="signIn inactive",signUp.className="signUp"):"signIn inactive"==element.className&&(e(sign_in,sign_up),signIn.className="signIn",signUp.className="signUp inactive")}),sign_up=document.querySelector(".sign_up"),sign_in=document.querySelector(".sign_in"),signUp=document.querySelector(".signUp"),signIn=document.querySelector(".signIn")})}();