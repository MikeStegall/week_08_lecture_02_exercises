var checkboxes = document.querySelectorAll('input')

// var customAlert = function (event) {
//   alert(event.target.value)
// }

function customAlert (event) {
  alert(event.target.value)
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', customAlert) // add event listener
})
