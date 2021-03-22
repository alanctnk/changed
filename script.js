let some = document.querySelector('#btn-1')
let some3 = document.querySelector('#btn-3')
let buttonsList = document.querySelectorAll('.form-check-input')
let input1 = document.querySelectorAll('.form-check-input')[0]
let lampClass = input1.parentElement.previousElementSibling.previousElementSibling

function checkLampOn(event) {
  let btn = event.target
  let lamp = btn.parentElement.previousElementSibling.previousElementSibling
  lamp.className = btn.checked ? "lamp-on" : "lamp-off"
}

function getIdNumber(str){
  let arr = str.split('')
  let numId  = parseInt(arr[str.length - 1])
  
  return numId
}

function getBoolCheck(id) {
  let element = document.querySelector(`#btn-${id}`).checked
  return element
}

// Essa função faz os múltiplos checks e atribui os estilos
function setMultiCheck(id) {
  let el = document.querySelector(`#btn-${id}`)
  let bool = el.checked
  let lamp = el.parentElement.previousElementSibling.previousElementSibling
  lamp.className = el.checked ? "lamp-off" : "lamp-on"
  el.checked = bool ? false : true
}

// Essa função faz a chamada de setMultiCheck quando um checkbox é clicado com o mouse
function clickCheck(event) {
  let btnId = event.target.id
  let numId = getIdNumber(btnId)
  
  // botões de 1 e 2
  if(numId < 3) {
    let id1 = numId + 6
    let id2 = numId + 2
    setMultiCheck(id1)
    setMultiCheck(id2)
  
  // botões de 3 à 5
  } else if (numId >= 3 && numId < 6) {
    let id1 = numId + 1
    let id2 = numId - 2
    setMultiCheck(id1)
    setMultiCheck(id2)

  // botões de 6 e 7  
  } else if(numId >= 6 && numId < 8) {
    let id1 = numId + 2
    let id2 = numId - 1
    setMultiCheck(id1)
    setMultiCheck(id2)

  // botões 8 e 9  
  } else if (numId >= 8){
    let id1 = numId - 3
    let id2 = numId - 4
    setMultiCheck(id1)
    setMultiCheck(id2)
  }

}


buttonsList.forEach( el => {
  el.addEventListener('change', checkLampOn)
})

buttonsList.forEach( el => {
  el.addEventListener('click', clickCheck)
})
window.onload = function init() {



}
