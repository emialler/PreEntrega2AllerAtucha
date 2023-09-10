import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Servicios from "./components/Servicios"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/servicios" element={<Servicios />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
