import './MainPage.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom"

const MainPage = ({articles, error}) => {
  const newsArticles = articles.map(article => {
    return (
      <Link key={article.id} to={`/details/${article.id}`}>
        <h3>{article.name}</h3>
        <img src={article.urlToImage} alt={article.description}/>
        <p>{article.description}</p>
        <p>{article.publishedAt}</p>
      </Link>
    )
  })
  return (
    <main>
      <Header />
      <div>
        {newsArticles}
      </div>
    </main>
  )
}

export default MainPage;