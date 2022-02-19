document.getElementById('login-submit').addEventListener('click',()=>{
const emailInput=document.getElementById('user-email');
const userEmail=emailInput.value ;

const passwordInput = document.getElementById('user-password');
const userPassword =passwordInput.value ;
if (userEmail == 'banking@gmail.com' && userPassword=='1234' ){

    window.location.href='banking.html'
}
} )