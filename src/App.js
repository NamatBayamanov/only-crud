import { Routes, Route } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleDelete from "./components/ArticleList/ArticleSingle/ArticleDelete/ArticleDelete";
import ArticleSingle from "./components/ArticleList/ArticleSingle/ArticleSingle";
import ArticleUpdate from "./components/ArticleList/ArticleSingle/ArticleUpdate/ArticleUpdate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<ArticleCreate/>}/>
        <Route path="/" element={<ArticleList/>}/>

        <Route path="/:id" element={<ArticleSingle />}/>
        <Route path="/update/:id" element={<ArticleUpdate />}/>
        <Route path="/delete/:id" element={<ArticleDelete />}/>

      </Routes>
    </div>
  );
}

export default App;
