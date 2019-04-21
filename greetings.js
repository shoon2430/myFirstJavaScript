const form = document.querySelector(".js-form"),
    input = document.querySelector("input");
    greetings = document.querySelector(".js-greetings");

const USER_LS = "crrentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue =input.value;
    //console.log(currentValue);
    paintGreetings(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);

}

function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;

}

function loadName(){
    const crrentUser = localStorage.getItem(USER_LS);
    if(crrentUser ==null){
        askForName();
    }else{
        paintGreetings(crrentUser);
    }
}

function init(){
    loadName();
}

init();