import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Scurumboard from './components/Scurumboard';

function App() {
  return (
    <>
  
    <Navbar />
    <div className='flex flex-col justify-between min-h-screen'>
      <div><MenuBar /></div>
      <div><Scurumboard /></div>
      <div><Footer /> </div>
  
  
  
  </div>

   
    </>
  );
}

export default App;
