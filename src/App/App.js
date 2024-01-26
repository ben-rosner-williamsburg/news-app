import { getArticles } from '../apiCalls';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "../MainPage/MainPage"
import DetailsPage from '../DetailsPage/DetailsPage'

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getArticles()
    .then((articleData) => {
      setArticles(articleData.articles)
    })
    .catch((err) => {
      setError(err.message)
    })
  }, [])

  return (
    <main className='news-app'>
      <Routes>
        <Route path="/" element={<MainPage articles={articles} error={error} />} />
        <Route path="/details/:id" element={<DetailsPage/>} />
      </Routes>
    </main>
  );
}

export default App;
