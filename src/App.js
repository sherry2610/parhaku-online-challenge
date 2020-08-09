import React, { useState, useEffect, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { PicSomeContext } from "./context/PicSomeContext";
import PicSome from "./pages/PicSome/";
import Cart from "./pages/Cart/";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./pages/Navigation";

function App() {
  const [imgData, setImgData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const providerValue = useMemo(
    () => ({ imgData, setImgData, cartItems, setCartItems }),
    [imgData, setImgData, cartItems, setCartItems ]
  );

  const fetchData = async () => {
    await fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map(d=>{
        return  {
            ...d,
            inCart: false,
          }
        })
        console.log("newData",newData)
        setImgData(newData)
      })
      .catch((err) => console.log("Error in DATA FETCH", err));
  };

  useEffect(() => {
    fetchData();
    console.log("useeffect");
  }, []);

  return (
    <div>
      <Navigation />
      <PicSomeContext.Provider value={providerValue}>
        <Switch>
          <Route path="/" exact component={PicSome} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </PicSomeContext.Provider>
    </div>
  );
}

export default App;
