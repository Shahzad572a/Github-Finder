import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';
import Home from './Component/page/Home';
import About from './Component/page/About';
import NotFound from './Component/page/NotFound';
import User from './Component/page/User';
import {GithubProveder} from './Context/Github/GithubContext'
import { AlertProveder } from './Context/Alert/AlertContext';
import Alert from './Component/Layout/Alert';
function App() {
  return (
    <GithubProveder>
      <AlertProveder>
    <BrowserRouter>
    
     
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
          

          <main className='container mx-auto px-3 pb-12'>
          <Alert/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user/:name' element={<User/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
            </Routes></main>

          <Footer/>
         </div>
         
     
    </BrowserRouter>
    </AlertProveder>
    </GithubProveder>
  );
}

export default App;
