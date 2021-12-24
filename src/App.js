import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';
import NavMenu from './components/nav/NavMenu';
import Detail from './Pages/detail/Detail';
import products from './database/Products';
import Footer from './components/footer/Footer';
import { Layout } from 'antd';

function App() {
  const data = products
  return (
    <Router>
      <Layout>
        <NavMenu />
        <Footer />
      </Layout>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail data={data} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
