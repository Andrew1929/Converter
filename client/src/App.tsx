import { siteRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store"; 

function App() {
  const routes = siteRouter();

  return (
    <BrowserRouter>
      <Provider store={store}>
        {routes}
      </Provider>
    </BrowserRouter>
  )
}

export default App
