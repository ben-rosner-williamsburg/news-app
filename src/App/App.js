import { getArticles } from '../apiCalls';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from "../MainPage/MainPage"
import DetailsPage from '../DetailsPage/DetailsPage'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    getArticles(query)
    .then((articleData) => {
      const articleswithIds = articleData.articles.map(article => ({
        ...article, 
        id: uuidv4()
      }))
      setArticles(articleswithIds)
    })
    .catch((err) => {
      setError(err.message)
    })
  }, [])


  return (
    <main className='news-app'>
      <Routes>
        <Route path="/" element={<MainPage articles={articles} setQuery={setQuery} query={query}/>} />
        <Route path="/details/:id" element={<DetailsPage articles={articles}/>} />
      </Routes>
    </main>
  );
}

export default App;
