import './App.css';
import Navbar from './components/Navber';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProducts from './pages/AddProducts';
import ViewProduct from './pages/ViewProduct';
import Categories from './pages/Categories';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar/>
        </div>
        <div className='col-8'>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="products" element = {<Products/>}/>
            <Route path="products/add" element = {<AddProducts/>}/>
            <Route path="products/:productID" element = {<ViewProduct/>}/>
            <Route path="category" element = {<Categories/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
