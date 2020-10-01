let newsArticles = document.getElementById("newsArticle")

let result = news.articles.map((article) => {
    return `
    <li>
        <h4>${article.title}</h4>
        <i>Author: ${article.author}</i><br>
        <a href = ${article.url}>Link to Article</a><br>
        <img class = "pic" src = '${swapImage(article)}'/><br>
        <p>Published At: ${article.publishedAt}</p>
        <hr style="border: 1px dotted black;" />
    </li>
    `

})

newsArticlesUL.insertAdjacentHTML('beforeend', `${result.join("")}`)

function swapImage(article) {
    if(article.urlToImage === null) {
        
        return "defaultPic.jpg"
        
    }
    else {

        return article.urlToImage
    
    }
}
