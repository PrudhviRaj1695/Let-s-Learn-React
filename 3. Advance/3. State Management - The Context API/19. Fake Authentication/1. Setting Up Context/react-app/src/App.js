import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form"; 
import { CitiesProvider } from "./contexts/CitiesContext";

const App = ()=>
{
  
  return (
  <CitiesProvider>
    <Router>
      <Routes>
        <Route index element= {<HomePage/>} />
        <Route path="product" element= {<Product/>} />
        <Route path="pricing" element= {<Pricing/>} />
        <Route path="login" element= {<Login/>} />
        <Route path="app" element= {<AppLayout/>}>
          <Route index element= {<Navigate replace to="cities" />} />
          <Route path="cities" element= {<CityList/>} />
          <Route path="cities/:cityId" element={<City/>} />
          <Route path="countries" element= {<CountryList/>} />
          <Route path="form" element= {<Form/>} />
        </Route>
        <Route path="*" element= {<PageNotFound/>} />
      </Routes>
    </Router>
  </CitiesProvider>);
}

export default App;



