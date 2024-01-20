const empty = ""
const uCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ"
const lCase = "abcdefghijklmnoprstuvwxyz"
const number = "1234567890"
const symbols = "!@#$%^&*()_+_}{|?><"

const pLength = document.getElementById("p-length")
const upperCase = document.getElementById("p-uppercase")
const lowerCase = document.getElementById("p-lowercase")
const numbers = document.getElementById("p-numbers")
const symbol = document.getElementById("p-symbols")
const submit = document.getElementById("submit")
const password = document.getElementById("password")
const copy = document.getElementById("copy")

submit.addEventListener("click", () =>{
    note.style.display = 'none';
    let initialPassword = empty;

    //?- jei taip : - jeigu ne
    upperCase.checked ? (initialPassword+= uCase) : ""  
    lowerCase.checked ? (initialPassword+= lCase) : "" 
    numbers.checked ? (initialPassword+= number) : "" 
    symbol.checked ? (initialPassword+= symbols) : ""   

    password.value = generatePassword (pLength.value, initialPassword)
})

function generatePassword(length, initialPassword) {
let pass = ""
for (let i = 0; i < length; i++) {
    pass+= initialPassword.charAt(Math.floor(Math.random()*initialPassword.length)) //paima charecter toj vietoj kur bus skaiciai? pagal index
    }
return pass
} 

copy.addEventListener("click", () => {
    // navigator.clipboard.writeText(password.value)
    // alert("Password Copied")

    if (password.value === "") {
        // alert ("Please, first generate your password !")
        note.style.display = 'block';
        note.style.backgroundColor = 'rgba(201, 98, 120, 0.37)';
    }
    else {
        password.select()
        document.execCommand("copy")
        // alert("Password is copied succesfully! ")
        note.style.display = 'block';
        note.innerText = "Password is copied succesfully !"
        note.style.backgroundColor = 'rgba(113, 164, 119, 0.733)';
    }
})

