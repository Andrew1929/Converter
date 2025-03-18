import { useEffect } from "react";
import { siteRouter } from "./routes";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { login } from "./store/authSlice";



function App() {
  const dispatch = useDispatch();
  const routes = siteRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");

    if (token && userId && userName) {
      dispatch(login({ token, userId, userName }));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>  
  )
}

export default App
