

import './App.css';
import Navbar from './components/Navbar/Navbar'
import all_product from './components/Assests/all_product'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';

import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png';
import kid_banner from './components/Assests/banner_kids.png';
import ShopContextProvider from './context/ShopContext';


function App() {
  console.log(all_product);
 

  return (
    <div>
     <BrowserRouter>
       <ShopContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
              <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"   />}/>
                 <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"  />}/>
                 
               

                 {/* <Route path="/product" element={<Product/>}/>
                 <Route path=':productId' element={<Product/>}/> */}
                 <Route path="/product/:productId" element={<Product/>}/>



                 
<Route/>


                 <Route path='/cart' element={<Cart/>}/>
                 <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
 <Footer/>

 
      
    
    </ShopContextProvider>
     </BrowserRouter>

     
      
    
      

     
    </div>
  )
}

export default App
