import './DetailsPage.css'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailsPage({}) {
  const [article, setArticle] = useState([])
  const params = useParams();
  const navigate = useNavigate();
  let id = params.id;
}

export default DetailsPage;