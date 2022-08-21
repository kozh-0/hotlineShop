import { Routes, Route } from "react-router-dom";

import { Contact } from "./Components/Contact";
import { NotFound } from "./Components/Help/NotFound";
import { Header } from "./Components/Help/Header";
import { Footer } from "./Components/Help/Footer";
import Products from "./Components/Products";
import { Main } from "./Components/Main";


export default function App() {

  
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/hotlineShop" element={<Main/>}/>
          <Route path="/hotlineShop/products" element={<Products/>}/>
          <Route path="/hotlineShop/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  );
}
