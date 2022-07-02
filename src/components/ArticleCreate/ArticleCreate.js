import axios from "axios";
import { useState } from "react";

function ArticleCreate() {

  const [input, setInput] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.post(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple.json`, Object.fromEntries(formData.entries()));

    setInput("");
  }

  const onChangeValue = (event) => {
    setInput(event.target.value);
  }

  return ( 
    <div>
      <form onSubmit={onSubmitForm}>  
        <input type="text" name="name" required value={input} onChange={onChangeValue}/>
        <button >
          Send
        </button>
      </form>
    </div>
  );
}

export default ArticleCreate;