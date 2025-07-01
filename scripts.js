
let range = document.getElementById("rage")
let mainInput = document.getElementById("text")
let test = document.querySelector(".test")
let little = document.getElementById("check")
let big = document.getElementById("segundo")
let numbers = document.getElementById("terceiro")
let especiais = document.getElementById("quatro")

range.addEventListener("input", () => {
    let x = range.value
    test.textContent = x
})

function generar() {
    let x = range.value
    let input = ""
   if(little.checked) {
    input += "abcdefghijklmnopqrstuvwyxz"
   }
   if(big.checked) {
    input += "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
   }
   if(numbers.checked) {
    input += "0123456789"
   }
   if(especiais.checked) {
    input += "!@#$%^&*()_+-={}[];<>:"
   }

   let letras = ""
   for(let i = 0; i < x; i++) {
    const pos = Math.floor(Math.random() * input.length)
    letras += input[pos]
   }

   mainInput.value = letras
}
