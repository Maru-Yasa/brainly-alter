import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { darkTheme, lightTheme } from "../styles/Themes"

// import Popper from "@popperjs/core"
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { SSRProvider } from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent.server"
import { useCallback, useState } from "react"

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState('light');

  const themeToggler = useCallback((val) => {
    setTheme(val)
  }, [setTheme])

  return (
  <SSRProvider>
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <NavbarComponent themeToggler={themeToggler} theme={theme} />
      <Component {...pageProps} />
      <div className="mt-5 row p-3 justify-content-center text-center">
        <span className="fw-bold">Created With ❤️ by <span className="text-blue">Maruf</span></span>
      </div>
    </ThemeProvider>
  </SSRProvider>)
}

export default MyApp
