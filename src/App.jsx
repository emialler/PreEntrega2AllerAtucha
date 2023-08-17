import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting = "Bienvenido al e-commerce de Casa Farina!"/>
    </>
  )
}

export default App
