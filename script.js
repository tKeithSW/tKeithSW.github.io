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

// Get modal, button, span element
var modal = document.getElementById("myModal");
var button = document.getElementById("viewCreditsBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal
button.onclick = function() {
  modal.style.display = "block";
}

// Close modal
span.onclick = function() {
  modal.style.display = "none";
}

// Clsoe modal when click modal screen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Form constants
const form = document.querySelector('form');
const formResponse = document.querySelector('js-form-response');

// Send form details as JSON to AWS API Gateway
form.onsubmit = e => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
    if (response.target.status === 200) {
        // The form submission was successful
        form.reset();
        confirm('Your message has been sent. Thank you.');
    } else {
        // The form submission failed
        confirm('Something went wrong');
        console.error(JSON.parse(response.target.response).message);
    }
    };
}
  