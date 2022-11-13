import {Routes, Route} from "react-router-dom"

/* Pages */
import Home from './Home/Home';
import About from './About/index';
import Rentals from './Rentals/index';
import Error from './Error/index'

/* Components */
import Navbar from '../components/Navbar/index';
//import Footer from '../components/Footer/index'
//<Footer />

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rentals/:id" element={<Rentals/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;