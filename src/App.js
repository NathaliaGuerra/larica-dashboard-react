import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="wrapper">
     < Header />
     < Menu />
     < Dashboard />
     < Footer />
     
    </div>
  );
}

export default App;
