import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";

export default function NavbarComponent({themeToggler, theme}){

    const [themeC, setThemeC] = useState(theme);
    let icon = 'bi bi-brightness-high-fill'
    let color = 'text-warning'

    const handleClick = () => {
      themeC === 'dark' ? setThemeC('light') : setThemeC('dark')
    }

    const darkMode = () => {
      color = 'text-warning'
      icon = 'bi bi-brightness-high-fill'
    }

    const lightMode = () => {
      color = 'text-navy'
      icon = "bi bi-moon-stars-fill"
    }
    useEffect(() => {
      themeToggler(themeC)
    }, [themeC, themeToggler])

    themeC === 'light' ?  lightMode() : darkMode() 

    return (<>
    
    <Navbar expand="lg" variant="" bg="">
        <Container>
           
           <Navbar.Brand></Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
            <Nav className="ml-auto">
                <span onClick={handleClick} className="fs-4 text-warning"> <i className={icon}></i> </span>
            </Nav>
        </Container>
    </Navbar>
    
    </>)

}