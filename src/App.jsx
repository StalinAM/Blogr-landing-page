// import logo from "./assets/logo.svg";
import HeaderTitleNav from "./components/header/HeaderTitleNav";
import Section1 from "./components/main/Section1";
import Section2 from "./components/main/Section2";
// import Section3 from "./components/Section3";
//import SectionFooter1 from "./components/SectionFooter1";
//import SectionFooter2 from "./components/SectionFooter2";
// import SectionFooter3 from "./components/SectionFooter3";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { colors } from "./styles/Theme";

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
      </ThemeProvider>
    </>
  );
}

export default App;
