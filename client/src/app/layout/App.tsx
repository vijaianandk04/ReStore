
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { useState } from "react";

function App() {
  const[darkMode, setDarkMode] = useState(false)
  const palletType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType==='light'? '#eaeaea' : '#121212'
    }
  }
})

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  );
}

export default App
