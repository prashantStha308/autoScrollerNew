import Scroller from "./components/Scroller";
import Hero from "./components/Hero";
import About from './components/About.jsx';
import { Box } from "@chakra-ui/react";


function App() {

  return (
    <Box id="app">
      <Hero />
      <Scroller />
      <About />
    </Box>
  )
}

export default App
