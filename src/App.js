import { Header } from "./Components/styled/Header.styled";
import { Footer } from "./Components/styled/Footer.styled";
import H1 from "./Components/styled/H1.styled";
import H4 from "./Components/styled/H4.styled";
import Container from "./Components/styled/Container.styled";
import FootH4 from './Components/styled/H4.styled';

function App() {
  return (
    <div>
      <Header>
        <H1>Shoppe</H1>
        <H4>Your daily shopping list.</H4>
      </Header>
      <Container>

      </Container>
      <Footer>
        <div>
        <Footer FootH4>Shoppe&copy;Copyright 2022</Footer>
        </div>
      </Footer>
    </div>
  );
}

export default App;
