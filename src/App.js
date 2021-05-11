import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="wrapper">
     < Navbar />
     < Header />
     < Menu />
     < Dashboard />
     < Footer />
     
    </div>
  );
}

export default App;
