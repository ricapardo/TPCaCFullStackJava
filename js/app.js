const btnLogin = document.getElementById('btnLogin');
const userEmail = document.getElementById('email');
const userPass = document.getElementById('password');

btnLogin.addEventListener('click', () => { 
  if (userEmail.value === "codoacodo@gmail.com" && userPass.value === "codoacodo"){
    window.location.href = "home.html";
}else {
      alert("Try using  EMAIL: codoacodo@gmail.com and PASS: codoacodo  ;)");  
  }
}); 