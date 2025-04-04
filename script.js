// script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("./articles.json")
        .then(response => response.json())
        .then(articles => {
            const articlesList = document.getElementById("articles-list");
            articles.forEach(article => {
                const articleCard = document.createElement("div");
                articleCard.className = "article-card";
                articleCard.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="article.html?id=${article.id}">Đọc tiếp</a>
                `;
                articlesList.appendChild(articleCard);
            });
        });
});
