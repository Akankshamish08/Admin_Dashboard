import logo from './logo.svg';
import './App.css';

import Nav from'./component/NavBar/Nav'
import Sidebar from './component/NavBar/Sidebar';
import Dashboard from './component/NavBar/Dashboard';
import Body from './component/NavBar/Body'
import BarChart from './component/BarChart';
import Graph from './component/Graph';
import Orders from './component/Orders';
import Footer from './component/Footer';
function App() {
   
  
  return (
    <div className="App">
     
      
      
      
      
       <Sidebar />
       <Body />
       <BarChart />
       <Orders />
       <Footer/>
      </div>
      
    
  );
}

export default App;
