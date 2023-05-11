import './App.css';
import Navbar from './component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Savat from './component/Savat/Savat';
import Corousel from './component/corusel/Corousel'
import Corousell from './component/kattacorusel/Corousell'
import Header from './component/header/Header'
import Headerr from './component/header4/Headerr'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Corousel />
      <Corousell />
      <Header />
      <Headerr />
      <Outlet />
    </div>
  );
}

export default App;
