const input = document.querySelector(".input")
    const btn = document.querySelector(".btn")
    const result = document.querySelector(".result")

    btn.addEventListener("click", palindrom)

function palindrom () {
    let inputVal = input.value
    let lenght = inputVal.length

    let start = inputVal.substring(0, Math.floor(lenght/2)).toLowerCase(); //zodzio pabaiga (sveikasis skaicius) Math.floor(len/2)
    console.log(start)

    let end = inputVal.substring(lenght-Math.floor(lenght/2))
    console.log(end)

    let flip = end.split("").reverse().join("")
    console.log(flip)

    // let flip2 = [...end].reverse().join("")
    // console.log(flip2)

    if (!inputVal) {
        result.innerHTML = `Don't forget to type your word!`
        result.style.display  = 'block';
        result.style.backgroundColor = 'rgba(205, 142, 174, 0.618)';
    }
    else if (!/^[A-Za-z]+$/.test(inputVal)) {
        result.innerHTML = `Please, type only letters!`
        result.style.display  = 'block';
        result.style.backgroundColor = 'rgba(205, 142, 174, 0.618)';
    }
    else if (start===flip) {
        result.innerHTML = `${inputVal.toUpperCase()} - is a palindrome`
        result.style.display  = 'block';
        result.style.backgroundColor = 'rgba(129, 156, 140, 0.508)';
    } else {
        result.innerHTML = `${inputVal.toUpperCase()} - is not a palindrome`
        result.style.display  = 'block';
        result.style.backgroundColor = 'rgba(205, 142, 174, 0.618)';
    }
}