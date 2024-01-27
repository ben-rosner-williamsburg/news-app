import "./MainPage.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../Search/Search";

const MainPage = ({ articles, setQuery, handleClick}) => {
  const newsArticles = articles.map((article) => {
    return (
      <Link className="article" key={article.id} to={`/details/${article.id}`} onClick={() => handleClick(article.id)}>
        <h3 className="article-item name">{article.name}</h3>
        <img
          className="article-item image"
          src={article.urlToImage}
          alt={article.description}
        />
        <p className="article-item description">{article.description}</p>
        <p className="article-date date">{article.publishedAt}</p>
      </Link>
    );
  });
  return (
    <main>
      <Header />
      {articles.length ? (
        <div className="articles-container"> {newsArticles}</div>
      ) : (
        <div className="search-container">
          {" "}
          {<Search articles={articles} setQuery={setQuery} />}
        </div>
      )}
    </main>
  );
};

export default MainPage;
