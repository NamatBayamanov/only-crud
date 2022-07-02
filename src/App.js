import { Routes, Route } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleSingle from "./components/ArticleList/ArticleSingle/ArticleSingle";
import Snippet from "./components/Snippet/Snippet";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<ArticleCreate/>}/>
        <Route path="/" element={<ArticleList/>}/>

        <Route path="/:id" element={<ArticleSingle />}/>


      </Routes>
    </div>
  );
}

export default App;
