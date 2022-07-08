import './App.css'

import Homepage from './pages/Home/Homepage';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Exp from './pages/Exp/Exp';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
     <Homepage/>
     <Profile/>
     <Exp/>
     <Contact/>
     <Footer/>
  
    </div>
  );
}

export default App;
