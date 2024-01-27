const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;


export const getArticles = (query) => {
  return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${REACT_APP_API_KEY}`)
  .then((response) => {
    if(response.ok){
      return response.json()
    }
  })
  .catch((err => console.error(err)))
}

export const getArticle = (query) => {
  return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${REACT_APP_API_KEY}`)
  .then((response) => {
    if(response.ok){
      return response.json()
    }
  })
  .catch((err => console.error(err)))
}