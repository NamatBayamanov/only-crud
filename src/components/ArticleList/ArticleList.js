import { useEffect, useState } from "react";
import classes from "./ArticleList.module.scss";
import axios from "axios";

function ArticleList() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple.json`).then(({data}) => setArticles(data))
  }, []);

  return ( 
    <div className={classes.ArticleList}>
    
    </div>
  );
}

export default ArticleList;