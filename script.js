let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('default')

} else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'default'){
        document.getElementById('theme-style').href = 'css/default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'css/blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'css/green.css'
    }

    if(mode == 'beige'){
        document.getElementById('theme-style').href = 'css/beige.css'
    }

    localStorage.setItem('theme', mode)
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var button = document.getElementById("viewCreditsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}