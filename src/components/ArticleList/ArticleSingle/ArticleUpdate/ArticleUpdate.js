import classes from "./ArticleUpdate.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function ArticleUpdate() {

  const {id} = useParams();
  console.log(id);


  const navigate = useNavigate();


  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    axios.get(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple/${id}.json`).then(({data}) => setInput(data));
  }, [id]);

  const onSubmit = (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);

    axios.put(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple/${id}.json`, Object.fromEntries(formData.entries()));

    navigate("/");
  }


  
  return ( 
    <div className={classes.ArticleUpdate}>
        <form onSubmit={onSubmit}>
          <div>
            <label>
              <input name="name" type="text" required defaultValue={input.name} />
            </label>
          </div>
          <div>
            <label>
              <textarea name="description" defaultValue={input.description}  type="text" required />
            </label>
          </div>
          <button>
            Change
          </button>
        </form>
    </div>
  );
}

export default ArticleUpdate;