import classes from "./ArticleSingle.module.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Snippet from "../../Snippet/Snippet";

function ArticleSingle() {
  const { id } = useParams();

  const [articleFull, setArticleFull] = useState(null);

  useEffect(() => {
    axios.get(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple/${id}.json`).then(({data}) => setArticleFull(data));
  }, []);

  let output = <Snippet/>;

  if(articleFull !== null) {
    output = (
      <li>
        <h2>
          {articleFull.name}
        </h2>
        <p>
          {articleFull.description}
        </p>
        <Link to={`/update/` + id}>
          Update
        </Link>
        <br/>
        <Link to={`/delete/` + id}>
          Delete
        </Link>
      </li>
    );
  }


  return ( 
    <div className={classes.ArticleSingle}>
        <ul>
          {output}
        </ul>
    </div>
  );
}

export default ArticleSingle;