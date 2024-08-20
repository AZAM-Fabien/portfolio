import { useSelector } from "react-redux";
import { RootState } from "./redux/store.tsx";
import Header from "./components/header/header.tsx";
import Home from "./pages/Home/Home.js";
import Time from "./components/time/time.tsx";
import Weather from "./components/weather/weather.tsx";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/footer.tsx";

const App: React.FC = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Footer />
      <Home />
      <Weather />
      <Time />
    </ThemeProvider>
  );
};

export default App;
