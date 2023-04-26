import './App.css';
import Navbar from './Newcomp/Navbar';
//import Home from  './Newcomp/Home'

//import Form  from './Components/Form';

import Mulform from './Components/Mulform';

import W1 from './Components/W1'

import Register  from './Pages/Register';
import Login  from './Pages/Login'
import Home from './Pages/Home'
//import Profile from './Pages/Profile';

import Form from './Pages/Form'
import Pdf from './Learn/Pdf'
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from './Pages/Forget';
import Change from './Pages/Change';

import High from  './Pages/High'
import Check from  './Pages/Check';
import Profile1 from './Pages/Profile1';
import Profile from  './Learn/Profile';
import Api from './Learn/Api'
import  Email from './Learn/Email'
import Phone from './Learn/Phone';
import Payment from './Learn/Payment';

import Layout from './Learn/Layout';

import Navbar1 from './Learn/Navbar';
import New  from './Components/New'

import Demo from './Mui/Demo'
import Checkout from './Mui/Checkout';
import Steper from './Mui/Steper'
import First from './Mui/First'
import Two from './Mui/Two'
import Datacontext from './Mui/Datacontex';
import React,{useState} from 'react';
import Drawerdata from './Mui/Drawer'

import NewDrawerdata from './Mui/NewDrawer'
import Fixed from './Mui/Fixed';
import Cont from './Mui/Container'
import C1 from './css/C1';


function App() {



  const [data, setData] = useState([]);



  return (


    <div className="App">

{/* 
   <Datacontext.Provider value={{data,setData}}>


  </Datacontext.Provider> */}


<Datacontext.Provider value={{data,setData}}>
    
<BrowserRouter>
       
      <Routes>
 
      
      <Route path='/'  element={<C1/>}> </Route>

           <Route path="/first" element={<First />}>  </Route>

           <Route path="/two" element={<Two />}>  </Route>


           <Route path="/d1" element={<Drawerdata/>}>  </Route>


           <Route path="/d2" element={<NewDrawerdata/>}>  </Route>

           <Route path="/d3" element={<Fixed/>}>  </Route>

           <Route path='/container'  element={<Cont/>}> </Route>

           <Route path="/demo" element={<Demo />}>  </Route>

           <Route path="/step" element={<Steper/>}>  </Route>
      
         
           <Route path="/check" element={<Checkout />}>  </Route>
         
           <Route path="/new" element={<New />}>  </Route>
       
           <Route path="/pro" element={<Profile1 />}>  </Route>

           <Route path="/api" element={<Api />}>  </Route>

           <Route path="/layout" element={<Layout/>}>  </Route>
           
           <Route path="/navbar" element={<Navbar1/>}>  </Route>

           <Route path='/email' element={<Email/>} > </Route>
           
           <Route path='/pay' element={<Payment/>} > </Route>

           <Route path='/phone' element={<Phone/>} > </Route>

           <Route path="/p1" element={<Profile />}>  </Route>

           <Route path="/pdf" element={<Pdf />}>  </Route>

           <Route path='/check' element={<Check/>}> </Route>
    
           <Route path='/profile' element={<Profile />}> </Route>

           <Route path='/high' element={<High/>}> </Route>
    
           <Route path='/login' element={<Login />}> </Route>
    
           <Route path='/home' element={<Home />} > </Route>

           <Route path='/w1' element={<W1 />} > </Route>
    
           <Route path='/form' element={<Form/>} > </Route>


           <Route path='/forgot' element={<Forget/>} > </Route>

           
           <Route path='/changepass' element={<Change/>} > </Route>
        
       
    
    
         </Routes>

       


       {/* <Footer/> */}

    </BrowserRouter>


    </Datacontext.Provider>
    
















            {/* <W1/>
        */}

      {/* <Mulform/>
          */}
{/* 
          <Boxwork/> */}


    </div>
  );
}

export default App;
