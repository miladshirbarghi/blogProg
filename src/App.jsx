import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/home/home"
import AddArticle from "./pages/addArticle/AddArticle"
import Article from "./pages/article/article"
import EditArticle from "./pages/editArticle/editArticle"
import About from "./components/about/about"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/add-article' element={<AddArticle />}/>
          <Route path='/article/:articleId' element={<Article />}/>
          <Route path='/edit-article/:articleId' element={<EditArticle />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
