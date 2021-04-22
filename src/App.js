import Nav from './components/Nav';
import Cart from './components/Cart';
import Profile from './components/Profile';
import './App.css';


function App() {
  return (
    <div className="App">
      
      {/* <h1>Allah hu akbar</h1> */}
      <div className="grid">
        <Nav />
        <Cart />
      </div>
      <Profile />
    </div>
  );
}

export default App;
