let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let button = document.querySelector("button");

const fetchQuote = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  h1.innerText = data.quote;
  p.innerText = "~" + data.author;
};

button.addEventListener("click", fetchQuote);

fetchQuote();
