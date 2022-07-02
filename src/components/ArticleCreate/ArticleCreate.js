import axios from "axios";
import { useState } from "react";

function ArticleCreate() {

  const [input, setInput] = useState("");

  const [text, setText] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    axios.post(`https://exchangerates-bd5eb-default-rtdb.firebaseio.com/peaple.json`, Object.fromEntries(formData.entries()));

    setInput("");
    setText("");
  }

  const onChangeValue = (event) => {
    setInput(event.target.value);
  }
  const onChangeText = (event) => {
    setText(event.target.value);
  }


  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>
            <input type="text" name="name" required value={input} onChange={onChangeValue} />
          </label>
        </div>
        <div>
          <label>
            <textarea required type="text" name="description" value={text} onChange={onChangeText}/>
          </label>
        </div>
        <button >
          Send
        </button>
      </form>
    </div>
  );
}

export default ArticleCreate;