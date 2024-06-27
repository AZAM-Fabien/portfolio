import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/Home/Home.js";
import Time from "./components/time/time.tsx";
import Weather from "./components/weather/weather.tsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        <Weather />
        <Time />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
