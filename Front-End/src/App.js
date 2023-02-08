// import logo from './logo.svg';
import './App.css';
import Router from './Components/Routing';
import Nav from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router /> {/*Router needs to be under nav to ensure elements are rendered underneath nav component*/}
    </div>
  );
}

export default App;
