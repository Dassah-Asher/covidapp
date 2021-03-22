import Header from "./components/Header";
import  Stats from "./components/Stats"
import CountrySelector from "./components/CountrySelector"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <CountrySelector/>
      <h3>Global Summary</h3>
      <Stats url="https://covid19.mathdro.id/api"/>
     
    
    </div>
  );
}

export default App;
