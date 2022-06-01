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

      <meta charset="utf-8" />
      <title>Brainly Alter</title>
      <meta name="description" content="Un-Official Brainly wrapper, no ads, and no limit"/>
      <meta name="image" content="https://ik.imagekit.io/maruyasa/brainly-alter__rUgHbmbE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654053284892"/>
      <meta itemProp="name" content="Brainly Alter" />
      <meta itemProp="description" content="Un-Official Brainly wrapper, no ads, and no limit"/>
      <meta itemProp="image" content="https://ik.imagekit.io/maruyasa/brainly-alter__rUgHbmbE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654053284892"/>
      <meta name="og:title" content="Brainly Alter"/>
      <meta name="og:description" content="Un-Official Brainly wrapper, no ads, and no limit"/>
      <meta name="og:type" content="website" />

      <NavbarComponent themeToggler={themeToggler} theme={theme} />
      <Component {...pageProps} />
      <div className="mt-5 row p-3 justify-content-center text-center">
        <span className="fw-bold">Created With ❤️ by <span className="text-blue">Maruf</span></span>
      </div>
    </ThemeProvider>
  </SSRProvider>)
}

export default MyApp
