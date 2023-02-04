import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css_files/products.css'
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import PostProvider from './myContext';

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <div className="App">
          <Routes className="dakkbg">
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
