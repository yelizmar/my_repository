var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length")
// Когда пользователь кликает в поле ввода пароля, выводим область сообщений
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
// Когда пользователь кликает вне поля ввода пароля, скрываем область сообщений
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}
// Когда пользователь начинает что-то печатать в поле ввода пароля
myInput.onkeyup = function() {
    // Проверяем на маленькие буквы
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // Проверяем на заглавные буквы
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    // Проверяем на цифры
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    // Проверяем длину
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
myInput.onsubmit=function (){
    var message = this.message.value;
    console.log(message)
    return false;
}
const users = [
    {
        login: 'lilpip',
        password: 'HelloWorld2024',
        role: admin
    },
    {
        login: 'milkebox',
        password: 'MIlkeee112300',
        role: 'user'
    }
];

const logForm = document.querySelector('form');
logForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const login = document.querySelector('input[name="login"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const user = users.find(user=>user.login===login && user.password===password);

    if (user){
        window.location.href = 'eshed.html';
    } else {
        alert('Вы ввели неверный логин или пароль. Повторите попытку.');
    }
});