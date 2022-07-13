import './App.css'
import React, { useState, useEffect } from 'react'

import Homepage from './pages/Home/Homepage';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Exp from './pages/Exp/Exp';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div className="App">
      <Homepage/>
      <Profile/>
      <Exp/>
      <Contact/>
      <Footer/>
    </div>
      ) : (
       <LoadingScreen/>
      )}
      </>
   
  );
}

export default App;
