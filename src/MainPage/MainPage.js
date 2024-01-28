import "./MainPage.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const MainPage = ({ articles, setQuery, handleClick}) => {
 const displayArticles = articles.map((article) => {
    return (
      <Link className="article" key={article.id} to={`/details/${article.id}`} onClick={() => handleClick(article.id)}>
        <h3 className="article-item name">{article.title}</h3>
        <div className="img-container">
        <img
          className="article-item image"
          src={article.urlToImage}
          alt={article.description}
        />
        </div>
        <p className="article-item description">{article.description}</p>
        <p className="article-date date">{article.publishedAt}</p>
      </Link>
    );
  });
  return (
    <main>
      <Header />
      <div className="search-container">
          {<Search setQuery={setQuery} />}
          {displayArticles}
        </div>
    </main>
  );
};

export default MainPage;
