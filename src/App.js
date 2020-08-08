import React, {useState, useEffect, useMemo} from 'react';
import {Route, Switch} from 'react-router-dom'
import {UserContext} from './context/UserContext'
import PicSome from './pages/PicSome/'
import Cart from './pages/Cart'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './pages/Navigation';


function App() {
  
  const [imgData,setImgData] = useState([])
  
const providerValue = useMemo(()=>({imgData,setImgData}),[imgData,setImgData])

  const  fetchData = async  () => {
    await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=>res.json())
    .then(data=>setImgData(data))
    .catch(err=>console.log("Error in DATA FETCH",err))
  }
  
  useEffect(()=>{
    fetchData()
    console.log("useeffect")
  },[])
  
  
  return (
    <div>
      <Navigation />
      <UserContext.Provider value={providerValue}>
      <Switch>
      <Route path='/' exact component={PicSome} />
      <Route path='/cart' component={Cart} />
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
