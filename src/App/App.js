import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "../MainPage/MainPage";
import DetailsPage from "../DetailsPage/DetailsPage";
import { v4 as uuidv4 } from "uuid";
import { getArticles } from "../apiCalls";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const defaultQuery = query || "news";
    getArticles(defaultQuery)
      .then((fetchedData) => {
        const articlesWithIds = fetchedData.articles.map((article) => ({
          ...article,
          id: uuidv4(),
        }));
        setArticles(articlesWithIds);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [query]);

  const handleClick = (id) => {
    findArticle(id);
  };

  const findArticle = (id) => {
    const articleSelected = articles.find((article) => article.id === id);
    setArticle(articleSelected);
  };

  return (
    <main className="news-app">
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              articles={articles}
              query={query}
              setQuery={setQuery}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/details/:id"
          element={<DetailsPage article={article} />}
        />
      </Routes>
    </main>
  );
}

export default App;
