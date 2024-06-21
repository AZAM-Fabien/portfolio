import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/redux.jsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/Home/Home.js";
import ScreenDisplay from "./components/screenDisplay/screenDisplay.tsx";


function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
          <ScreenDisplay />
        </Router>
      {/* </Provider> */}
    </>
  );
}

export default App;
