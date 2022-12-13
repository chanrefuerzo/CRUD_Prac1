import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Products from "./pages/productList/ProductList";
import { productInputs, userInputs } from "./formsource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={<List link={"/users/new"} title={"Add New User"} />}
              />
              <Route
                path="new"
                element={<New inputs={userInputs} title={"Add New User"} />}
              />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <Products link={"/products/new"} title={"Add New Product"} />
                }
              />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
              <Route path=":productId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
