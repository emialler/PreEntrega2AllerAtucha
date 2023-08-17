import CartWidget from "./CartWidget"
import image from "../assets/logo.jpg"
import { AppBar } from "@mui/material"


const Navbar = () => {
  return (
    <>
        <AppBar id="appBar">
            <nav id="navBar">
                <ul>
                    <li><img src={image} id="logo"></img></li>
                    <li><a href="">Quiénes somos?</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Cuidado de tu piscina</a></li>
                    <li><a href=""><CartWidget/></a></li>
                </ul>
            </nav>
        </AppBar>
    </>
  )
}

export default Navbar