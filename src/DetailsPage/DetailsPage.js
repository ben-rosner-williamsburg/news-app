import "./DetailsPage.css";
import {Link} from 'react-router-dom'

function DetailsPage({ article }) {
  return (
    <div>
      <div className="back-text-container">
        <Link to={"/"} className="back-text">Back</Link>
      </div>
      <div className="details" key={article.id}>
        <h1> {article.name}</h1>
        <img
          className="article-item image"
          src={article.urlToImage}
          alt={article.description}
        />
        <p className="article-item date">{article.publishedAt}</p>
        <p className="article-item content">{article.content}</p>
        <p className="article-item source">{article.source.name}</p>
        <a className="article-item link" href={article.url}>More Info</a>
      </div>
    </div>
  );
}

export default DetailsPage;
