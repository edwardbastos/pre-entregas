var form_login = document.querySelector(".login_Form");
var form_register = document.querySelector(".register_Form");
var container_login_register = document.querySelector(".container-login-register");
var back_box_login = document.querySelector(".back-box-login");
var back_box_register = document.querySelector(".back-box-register");
window.addEventListener("resize", anchoPage);

function anchoPage(){

    if (window.innerWidth > 850){
        form_login.style.display = "block";
        container_login_register.style.left = "10px";
        form_register.style.display = "none";
        back_box_register.style.opacity = "1";
        back_box_login.style.opacity = "0";
    }else{
        form_login.style.display = "block";
        container_login_register.style.left = "0px";
        form_register.style.display = "none";
        back_box_register.style.display = "block";
        back_box_login.style.display = "none";
    }
}

anchoPage();

const form = document.getElementById('loginForm');
form.addEventListener('submit',async e=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};

    data.forEach((value,key)=>obj[key]=value);
    const response = await fetch('/api/sessions/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":'application/json'
        }
    })

    const result = await response.json();
    if(response.status ===200)
    {
        localStorage.setItem('accessToken', result.token);
        window.location.replace('/products');
    }
})


