import { GlobalStyles } from "./styled-components/Global.Styled";
import { Helmet } from "react-helmet";
import Title from "./components/Title";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <div>
        <Title />
        <SignUp />
      </div>
    </>
  );
}

export default App;
