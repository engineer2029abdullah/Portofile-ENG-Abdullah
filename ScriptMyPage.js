function login(event)
{
    event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
   if (email==="") {
        window.alert("plz enter your email");
        return;
     }
     else if(password===""){
        window.alert("plz enter your password");
        return;
     }
    if(email==="abdullah@2006"&&password==="100852"){
        window.location.replace('MyPageAfter.html');
    }
     else{
        window.alert("wrong email or password");
    }
}