import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
