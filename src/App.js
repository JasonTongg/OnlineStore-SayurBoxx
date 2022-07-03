import './App.css';
import {ThemeProvider} from 'styled-components'
import * as theme from './components/Variable'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Popup from './components/Popup'

let Container = styled.section`
  width: 100vw;
  position: relative;
`;

let Section = styled.section`
  width: 100vw;
  min-height: calc( 100vh - 128px);
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  justify-content: center
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header></Header>
        <Section>
          <Navbar></Navbar>
          <Content></Content>
          <Cart></Cart>
          <Checkout></Checkout>
        </Section>
        <Footer></Footer>
        <Popup></Popup>
      </Container>
    </ThemeProvider>
  );
}

export default App;
