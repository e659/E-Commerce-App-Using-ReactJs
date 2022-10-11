import { Route,Routes,Switch  } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import HomeContent from "./Components/Home/HomeContent";
import ProductDetails from "./Components/Products/ProductDetails";
function App() {
  return (
    <>
    <Header/>
  <Routes>
        <Route path="/" element={<HomeContent  />} />
        <Route path='home' element={<HomeContent/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>


    </>
  );
}

export default App;
