const cardsContainer = document.getElementById("cards-container");
const newsCardTemplate = document.getElementById("template-news-card");

window.addEventListener("load", () => fetchNews("India"));

function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `/fetchData?q=${query}&apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);
}


// Rest of the code (bindData, fillDataInCard, onNavItemClick, etc.) remains the same.
