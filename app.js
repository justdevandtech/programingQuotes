
var output = document.querySelector('.out');
var stopQuote = document.querySelector('#stop-auto-display-quote');
var startQuote = document.querySelector('#start-auto-display-quote');
var autoDisplayQuote;
let crr = 0;

let jsonData = []


/* window.addEventListener('DOMContentLoaded', autoGenerate) */
async function generateQuotes() {
  try {
    const res = await fetch("http://quotes.stormconsultancy.co.uk/quotes.json");
    jsonData = await res.json();
    autoGenerate(jsonData);
  } catch (error) {
    console.log(error);
  }
}

function autoGenerate(dataFromAPI) {
  const data = dataFromAPI.map(items => {
      return `
      <div class="div rounded">
      <p id="quote">${items.quote}</p>
            <h4 id="author">${items.author}</h4>
            <a id="links" href=${items.permalink} target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
            </div>
      `;
  }).join("")

  output.innerHTML = data
}

generateQuotes();
/* 
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
} */