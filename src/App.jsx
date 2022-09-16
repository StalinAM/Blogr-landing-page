import HeaderTitleNav from "./components/header/HeaderTitleNav";
import Section1 from "./components/main/Section1";
import Section2 from "./components/main/Section2";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { colors } from "./styles/Theme";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        <HeaderTitleNav />
        <main>
          <Section1 indexTitle={1} indexSP={0} nameImage={"editor"} />
          <Section2 indexSP={2} />
          <Section1 indexSP={3} nameImage={"laptop"} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
