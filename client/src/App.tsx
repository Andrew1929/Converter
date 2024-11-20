import { siteRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes = siteRouter();

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App
