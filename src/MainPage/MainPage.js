import './MainPage.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom"

const MainPage = ({articles, error}) => {
  const newsArticles = articles.map(article => {
    return (
      <Link className="article" key={article.id} to={`/details/${article.id}`}>
        <h3 className="article-item name">{article.name}</h3>
        <img className="article-item image" src={article.urlToImage} alt={article.description}/>
        <p className='article-item description'>{article.description}</p>
        <p className='article-date date'>{article.publishedAt}</p>
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