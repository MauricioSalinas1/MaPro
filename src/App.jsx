import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"

function App() {
  
  // const nombre = "Mauricio"
  // const edad = 25
  // esto se saca y se lleva al nuevo archivo

  return ( 
    <>

    <NavBar/>

    <ItemListContainer greeting="Mauricio"/>

    <Footer/>

    </>
    )
  }
  
  export default App
