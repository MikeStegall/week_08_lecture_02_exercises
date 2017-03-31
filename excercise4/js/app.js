var checkboxes = document.querySelectorAll('input');

// Pass in the event object
var customAlert = function() {
  // Alert the event target's value
  alert();
}

checkboxes.forEach( function(checkbox) {
  checkbox.addEventListener("change", customAlert);
})
