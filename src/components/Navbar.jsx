import CartWidget from "./CartWidget";
import image from "../assets/logo.jpg";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
        <AppBar id="appBar">
            <nav id="navBar">
                    <Link to={"/"} className="navBar__links">
                      <img src={image} id="logo"></img>
                    </Link>
                    <Link to={"/About"} className="navBar__links">
                      Quiénes somos?
                    </Link>
                      <Button
                        className="navBar__links"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        Productos
                      </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <Link to={`/category/${"robots"}`} className="navBar__links">
                        <MenuItem onClick={handleClose}>Robots</MenuItem>
                      </Link>
                      <Link to={`/category/${"quimicos"}`} className="navBar__links">
                        <MenuItem onClick={handleClose}>Productos químicos</MenuItem>
                      </Link>
                      <Link to={`/category/${"accesorios"}`} className="navBar__links">
                        <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                      </Link>
                      <Link to={"/"} className="navBar__links">
                        <MenuItem onClick={handleClose}>Ver todos</MenuItem>
                      </Link>
                    </Menu>
                    <Link to={"/servicios"} className="navBar__links">
                      Servicios
                    </Link>
                    <Link to={"/cart"} className="navBar__links">
                      <CartWidget/>
                    </Link>
            </nav>
        </AppBar>
    </>
  )
}

export default Navbar