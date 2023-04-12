
import './App.css';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import styled from 'styled-components';

function App() {
  return (
    <Wrap>
      <Header />
      <Main />
      <Footer />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`