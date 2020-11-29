import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Documentation from './Documentation/Documentation'
function App() {
  return (
    <div className="App">
      <Header/>
      <Documentation/>
      <Sidebar/>
    </div>
  );
}

export default App;
