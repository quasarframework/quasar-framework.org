(function() {

  /* Toggles */

  var toggleBtns = document.querySelectorAll('.qwb-toggle');

  toggleBtns.forEach(function(toggle) {
    toggle.addEventListener("click", function(evt) {
      evt.preventDefault()
      this.classList.toggle('on');
    })
  })

}());
