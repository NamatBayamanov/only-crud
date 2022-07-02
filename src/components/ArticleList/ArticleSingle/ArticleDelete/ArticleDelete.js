import classes from "./ArticleDelete.module.scss";
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";
function ArticleDelete() {

  const { id } = useParams();

  console.log(id);

  const navigate = useNavigate();

  const onDelete = (event) => {
    event.preventDefault();
    
    axios.delete(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple/${id}.json`);

    navigate(`/`);
  }
  return ( 
    <div className={classes.ArticleDelete}>
      <h2>
        Are you sure?
      </h2>
      <div onClick={onDelete}>
        <Link to="/">
          Yes
        </Link>
      </div>
      <Link to={`/` + id} >
        No
      </Link>
    </div>
  );
}

export default ArticleDelete;