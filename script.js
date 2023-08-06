const API_KEY = "2f81b6da98b64eeb9cff1aac55edbf68";

const cardsContainer = document.getElementById("cards-container");
const newsCardTemplate = document.getElementById("template-news-card");

window.addEventListener("load", () => fetchNews("India"));

function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  const apiKey = API_KEY;
  const url = `/fetchData?q=${query}&apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);
}


// Rest of the code (bindData, fillDataInCard, onNavItemClick, etc.) remains the same.
