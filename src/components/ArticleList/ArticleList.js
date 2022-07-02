import { useEffect, useState } from "react";
import classes from "./ArticleList.module.scss";
import axios from "axios";
import Snippet from "../Snippet/Snippet";

function ArticleList() {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axios.get(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple.json`).then(({data}) => {
      const newArticle = Object.keys(data).map((id) => {
        return { id: id, ...data[id] };
      });
      console.log(newArticle);
      setArticles(newArticle);
      
    });
  }, []);

  let output = <Snippet/>;
  if(articles !== null) {
    output = articles.map(article => {
      return(
        <li key={article.id}>
          {article.name}
        </li>
      );
    });
  }


  return ( 
    <div className={classes.ArticleList}>
      {output}
    </div>
  );
}

export default ArticleList;