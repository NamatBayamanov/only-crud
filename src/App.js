import { Routes, Route } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<ArticleCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
