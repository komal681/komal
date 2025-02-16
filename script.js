document.getElementById("registerForm") .addEventListener("submit",function(event){
    event.preventDefault();
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;
    if( username === "" || password === ""){
        alert ("All fields are required");
        return;
    }
    let users= JSON.parse(localStorage.getItem("users")) || [];
    let userExists= users.some(user => user.username === username);
    if(userExists){
        alert("username already taken");
        return;
    }
    users.push({ username, password});

localStorage.setItem("users",JSON.stringify(users));
alert("Registration successfully you can now log in");
   document.getElementById("registerForm").reset();
  
});
document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault();

    let username=document.getElementById("loginUsername").value;
    let password=document.getElementById("loginPassword").value;
    let message=document.getElementById("message");

    let users= JSON.parse(localStorage.getItem("users"))||[];
    let validUser= users.find(user => user.username === username && user.password === password);
    if(validUser) {
    

        message.style.color="green";
        message.textContent="Login sucessfull";

    }else{
        message.style.color="red";
        message.textContent="invalid username or password";
    }
    document.getElementById("loginForm").reset();
});


