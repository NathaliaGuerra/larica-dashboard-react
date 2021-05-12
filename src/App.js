import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="wrapper">
     < Navbar />
     < Menu />
     < Dashboard />
     < Footer />
    </div>
  );
}

export default App;
