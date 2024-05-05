import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HompePage";
import AboutPage from "./pages/Aboutpage";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/porto/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
