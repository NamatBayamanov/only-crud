import { Routes, Route } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
import ArticleList from "./components/ArticleList/ArticleList";
import Snippet from "./components/Snippet/Snippet";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<ArticleCreate/>}/>
        <Route path="/" element={<ArticleList/>}/>
      </Routes>
    </div>
  );
}

export default App;
