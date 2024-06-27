import { useSelector } from "react-redux";
import { RootState } from "./redux/store.tsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/Home/Home.js";
import Time from "./components/time/time.tsx";
import Weather from "./components/weather/weather.tsx";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  return (
      <ThemeProvider theme={currentTheme}>
        <Home />
        <Weather />
        <Time />
        <Footer />
      </ThemeProvider>
  );
};

export default App;
