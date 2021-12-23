import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Menu from './components/Menu/menu';
import { useState } from 'react';

function App() {
    const [dish, setDish] = useState([{},{}]);

    const handleClick = () => {
      dish.filter()
    }
  return (
    <div className="App">
      <Header/>
      <Menu onClick={}/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
