// import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';

function App() {
  return (
    <div className="App">
        <img src='../list-img.webp' alt="logo"></img>
      <h1>Shopping List</h1>
      <div>
        <AddItem/>
      </div>
      <div></div>

    </div>
  );
}

export default App;
