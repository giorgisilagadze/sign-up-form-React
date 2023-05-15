import { GlobalStyles } from "./styled-components/Global.Styled";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
    </>
  );
}

export default App;
