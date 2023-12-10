const loginForm =document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string 변수저장 
const HIDDEN_CLASSNAME =  "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // 브라우저 기본동작 막기
    // submit 시 새로고침 막음
    event.preventDefault();
    //loginForm.classList.add("hidden");
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;   
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello" + username; 
    //greeting.innerText = `Hello + ${username}`; 
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    //console.log(username);
    paintGreetings(username);
}

//loginForm.addEventListener("submit", onLoginSubmit);
function paintGreetings(username){
    greeting.innerText = `Hello + ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("sunmit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}