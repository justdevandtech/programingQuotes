document.querySelector("button").addEventListener('click', generateQuotes);
var output = document.querySelector('.out');
var stopQuote = document.querySelector('#stop-auto-display-quote');
var startQuote = document.querySelector('#start-auto-display-quote');
var autoDisplayQuote;
let crr = 0;
window.addEventListener('DOMContentLoaded', autoGenerate)
function generateQuotes() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', ' http://quotes.stormconsultancy.co.uk/quotes.json', true);


    xhr.onload = function () {
        if (this.status == 200) {
            var items = JSON.parse(this.responseText);
            /* console.log(items);  */
            crr++;
            output.innerHTML = `<p id="quote">${items[crr].quote}</p>
            <h4 id="author">${items[crr].author}</h4>
            <a id="links" href=${items[crr].permalink} target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
            `
/* 
            for (let i = 0; i < items.length; i++) {
                output.innerHTML += `<p id="quote">${items[i].quote}</p>
                <h4 id="author">${items[i].author}</h4>
                <a id="links" href=${items[i].permalink} target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                `
    
            } */
        }

       /*  for (let i = 0; i < items.length; i++) {
            const element = items[i];
            console.log(element);
        } */
    }
    xhr.send();
  /* autoDisplayQuote =  setTimeout(generateQuotes, 2000) */
}

function autoGenerate() {
    autoDisplayQuote =  setTimeout(autoGenerate, 3000)
    generateQuotes()
}

stopQuote.addEventListener('click', quoteStop);
function quoteStop() {
    clearTimeout(autoDisplayQuote);
    startQuote.style.display = "block";
    this.style.display = "none"
}

startQuote.addEventListener('click', quoteStart);
function quoteStart() {
    autoDisplayQuote =  setTimeout(quoteStart, 3000)
    autoGenerate();
    stopQuote.style.display = "block";
    startQuote.style.display = "none"
}